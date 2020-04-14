import React from 'react';

import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Accessibility',
  decorators: [withA11y],
};

export const accessible = () => (
  <button>
    Accessible button
  </button>
);

export const inaccessible = () => (
  <button style={{ backgroundColor: 'red', color: 'darkRed', }}>
    Inaccessible button
  </button>
);


