import React from 'react';
import { action } from '@storybook/addon-actions';
import MyButton from './MyButton'

export default {
  title: 'MyButton',
  component: MyButton,
};

export const Text = () => <MyButton onClick={action('clicked')} text={"someText"}/>;
export const Default = () => <MyButton />;
