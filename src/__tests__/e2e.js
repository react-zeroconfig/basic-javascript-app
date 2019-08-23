import puppeteer from 'puppeteer';

describe('E2E Sample', () => {
  test('Test', async () => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    
    await page.goto('http://localhost:3100');
    await page.waitForSelector('#app h1');
    
    const header = await page.$eval('h1', e => e.innerHTML);
    
    expect(header).toEqual('Hello World!');
    
    browser.close();
  });
});