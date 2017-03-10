import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../../Artist';
import {Album} from '../../../Album';

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id:string;
  artist:Artist[];
  album:Album[];
  constructor(private _spotifService:SpotifyService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.map(params=>params['id']).subscribe(id=>{
      this._spotifService.getArtist(id).subscribe(artist=>{
        this.artist=artist;
      });
    });
  }

}
