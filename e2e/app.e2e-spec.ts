import { ExploringAngular2Page } from './app.po';

describe('exploring-angular2 App', function() {
  let page: ExploringAngular2Page;

  beforeEach(() => {
    page = new ExploringAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
