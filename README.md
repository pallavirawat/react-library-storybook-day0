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

Steps we shall we following:
1. npx -p @storybook/cli sb init


This will add 2 stories samples and setup rest of the things for you!
Also creates .storybook with main.js


Some Examples:
http://airbnb.io/react-dates/?path=/story/daterangepicker-drp--default
https://necolas.github.io/react-native-web/docs/?path=/docs/overview-getting-started--page

Nice intro tutorial:
https://www.learnstorybook.com/intro-to-storybook/react/en/get-started/

Component Driven Development : build process around components, which end up in pages or screens

About writing stories:
Default is Component Story Format (CSF):
https://storybook.js.org/docs/formats/component-story-format/

===============================================================================

Adons:
https://storybook.js.org/addons/

Actions:  create actions handlers. By default comes with storybook


Decorators: COme by default as well
Decorators are wrapper components or Storybook decorators that wrap a story.


Addon Docs:
https://github.com/storybookjs/storybook/tree/master/addons/docs
yarn add -D @storybook/addon-docs@next
Autogenerates docs for you.
(Demo)

Accessibility:
https://github.com/storybookjs/storybook/tree/master/addons/a11y

knobs:
yarn add @storybook/addon-knobs --dev

Testing?





