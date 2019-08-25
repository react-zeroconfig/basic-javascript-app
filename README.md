# Start development

```bash
npm start
```

# Build

```bash
npm run build
```

# Source Import Sample

## Jest 
<!-- import src/__tests__/*.{js,jsx} --title-tag h3 -->
<h3>src/__tests__/e2e.js</h3>
```js
import puppeteer from 'puppeteer';

describe('E2E Sample', () => {
  test('Test', async () => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    
    await page.goto('http://localhost:3100');
    await page.waitForSelector('#app > h1');
    
    await expect(page.$eval('#app > h1', e => e.innerHTML)).resolves.toEqual('Hello World!');
    
    browser.close();
  });
});
```
<h3>src/__tests__/sample.js</h3>
```js
describe('Sample', () => {
  test('Test', () => {
    expect('text').toEqual('text');
  });
});
```
<!-- importend -->

<!-- import src/**/*.test.{js,jsx} --title-tag h3 -->
<!-- importend -->

## Storybook
<!-- import src/**/*.stories.{js,jsx} --title-tag h3 -->
<h3>src/app/components/Title.stories.jsx</h3>
```jsx
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Title } from './Title';

storiesOf('Title', module)
  .add('text=Hello?', () => (
    <Title text="Hello?"/>
  ))
  .add('text=World?', () => (
    <Title text="World?"/>
  ));
```
<!-- importend -->