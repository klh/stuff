const puppeteer = require('puppeteer');

describe('Visual Diffing of WidgetWrapper', () => {
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch();
  });

  it('Renders and Matches Previous Snapshot', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/?city=copenhagen');
    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  });

  afterAll(async () => {
    await browser.close();
  });
});