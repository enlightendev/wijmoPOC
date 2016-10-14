import { WijmoPOCPage } from './app.po';

describe('wijmo-poc App', function() {
  let page: WijmoPOCPage;

  beforeEach(() => {
    page = new WijmoPOCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
