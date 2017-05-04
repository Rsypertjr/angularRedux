import { HeroesTourPage } from './app.po';

describe('heroes-tour App', () => {
  let page: HeroesTourPage;

  beforeEach(() => {
    page = new HeroesTourPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
