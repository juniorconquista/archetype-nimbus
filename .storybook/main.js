const path = require("path");

module.exports = {
  stories: ['../packages/react/**/*.stories.tsx', '../packages/core/**/*.stories.tsx'],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs",
    "@storybook/addon-a11y",
    "@storybook/addon-storysource",
    "@storybook/addon-docs",
    "@storybook/addon-viewport",
  ]
};
