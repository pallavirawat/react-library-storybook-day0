import React from 'react';
import MyButton from '../1-BasicStory/MyButton'
import Center from '../2-Decorator/Center'

export default {
  title: 'StoryBookDecorator',
  component: MyButton,
  decorators: [(storyFn) => <Center>{storyFn()}</Center>],
};

export const StoryBookDecorator = () => <MyButton>Hello Button</MyButton>;


