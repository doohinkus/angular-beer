import { TapRoomPage } from './app.po';

describe('tap-room App', function() {
  let page: TapRoomPage;

  beforeEach(() => {
    page = new TapRoomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
