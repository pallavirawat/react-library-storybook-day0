import React from 'react';
import MyButton from '../1-BasicStory/MyButton'
import Center from '../2-Decorator/Center'

export default {
  title: 'ComponentDecorator',
  component: MyButton,
};

export const ComponentDecorator = () => (
  <Center>
    <MyButton>Hello Button</MyButton>
  </Center>
);


