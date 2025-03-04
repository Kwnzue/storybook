import { configure, addParameters, addDecorator } from '@storybook/react';
import { create } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y);
addParameters({
  options: {
    isFullscreen: false,
    showAddonsPanel: true,
    showSearchBox: false,
    panelPosition: 'right',
    hierarchySeparator: /\./,
    hierarchyRootSeparator: /\|/,
    enableShortcuts: true,
    theme: create({
      base: 'light',
      brandTitle: 'CRA Kitchen Sink',
      brandUrl: 'https://github.com/storybookjs/storybook/tree/master/examples/cra-kitchen-sink',
      gridCellSize: 12,
    }),
    storySort: (a, b) => a[1].id.localeCompare(b[1].id),
  },
});

function loadStories() {
  // order of imports will determine the order of the stories unless a storySort is passed to the options object
  require('../src/stories/welcome');

  // automatically import all story js files that end with *.stories.js
  const req = require.context('../src/stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
