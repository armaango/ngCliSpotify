import { NgCliSpotifyPage } from './app.po';

describe('ng-cli-spotify App', () => {
  let page: NgCliSpotifyPage;

  beforeEach(() => {
    page = new NgCliSpotifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
