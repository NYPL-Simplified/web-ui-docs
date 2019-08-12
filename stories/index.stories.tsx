import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

storiesOf('Welcome', module)
  .add('introduction', () => 
    <div>
      <h2>Library Simplified UI Components</h2>
      <p>
        Welcome to the documentation for high-level components used in various SimplyE web apps.
      </p>
    </div>,
    {
      info: {
        disable: true
      }
    }
  );
