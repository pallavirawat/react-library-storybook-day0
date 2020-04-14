module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',

    '@storybook/addon-docs/preset',

    '@storybook/addon-a11y/register',

    '@storybook/addon-knobs/register'
  ],
};
