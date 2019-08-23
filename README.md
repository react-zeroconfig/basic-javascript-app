# Start development

```bash
npm start
```

# Build

```bash
npm run build
```

# Source

## Jest 
<!-- import src/__tests__/sample.js -->
```js
describe('Sample', () => {
  test('Test', () => {
    expect('text').toEqual('text');
  });
});
```
<!-- importend -->

## Storybook
<!-- import src/app/components/Title.stories.jsx -->
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