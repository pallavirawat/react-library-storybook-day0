# react-library-storybook-day0

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-library-storybook-day0.svg)](https://www.npmjs.com/package/react-library-storybook-day0) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-library-storybook-day0
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'react-library-storybook-day0'
import 'react-library-storybook-day0/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## License

MIT © [](https://github.com/)

## Adding a storybook
```shell script
npx -p @storybook/cli sb init
```

This will add 2 stories samples and setup rest of the things for you!
Also creates .storybook with main.js


## Some Examples:
http://airbnb.io/react-dates/?path=/story/daterangepicker-drp--default
https://necolas.github.io/react-native-web/docs/?path=/docs/overview-getting-started--page

## Nice intro tutorial:
https://www.learnstorybook.com/intro-to-storybook/react/en/get-started/

`Component Driven Development` : build process around components, which end up in pages or screens

### About writing stories:
Default is Component Story Format (CSF):
https://storybook.js.org/docs/formats/component-story-format/

===============================================================================

## Adons:
https://storybook.js.org/addons/

### Actions:  create actions handlers. By default comes with storybook


### Decorators: COme by default as well
Decorators are wrapper components or Storybook decorators that wrap a story.


### Addon Docs:
https://github.com/storybookjs/storybook/tree/master/addons/docs
```shell script
yarn add -D @storybook/addon-docs@next
```
Autogenerates docs for you.
(Demo)

### Accessibility:
https://github.com/storybookjs/storybook/tree/master/addons/a11y

### knobs:
```shell script
yarn add @storybook/addon-knobs --dev
```

## Testing?
https://www.learnstorybook.com/intro-to-storybook/react/en/test/

### Visual Testing:
rely on developers to manually look at a component to verify it for correctness.
They help us sanity check a component’s appearance as we build.

### Snapshot testing
capture a component’s rendered markup.
They help us stay abreast of markup changes that cause rendering errors and warnings.

https://www.learnstorybook.com/intro-to-storybook/react/en/simple-component/
-  recording the “known good” output of a component for a given input
    and then flagging the component whenever the output changes in future.

```shell script
yarn add -D @storybook/addon-storyshots react-test-renderer
```

```shell script
 yarn test:unit
```



### Unit Testing
verify that the output of a component remains the same given a fixed input.
 They’re great for testing the functional qualities of a component.

Here we are testing that pinned tasks are rendered before unpinned tasks.
Human eye can sometimes fail to notice this change and we might end up updating the snapshot.

ex.
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { WithPinnedTasks } from './TaskList.stories';

it('renders pinned tasks at the start of the list', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WithPinnedTasks />, div);

  // We expect the task titled "Task 6 (pinned)" to be rendered first, not at the end
  const lastTaskInput = div.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]');
  expect(lastTaskInput).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});
```

### visual regression testing
catch changes in appearance.
They work by capturing screenshots of every story and comparing them commit-to-commit to surface changes.
This is perfect for verifying graphical elements like layout, color, size, and contrast.

Recommended tool: Chromatic

Chromatic:
```shell script
yarn add -D storybook-chromatic
```

https://www.chromaticqa.com/start
https://docs.chromaticqa.com/setup_ci

```shell script
npx chromatic --app-code=<appcode>
```
First time this uploads the shots to their server. Also add a script to the package.json

Running it again after making changes compares each visual from the server.

```shell script
yarn chromatic
```
