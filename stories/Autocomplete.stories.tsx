import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Autocomplete from 'simplified-circulation-web/src/components/Autocomplete';

const autocompleteValues = ["apple", "ant", "ankle", "app", "anti-gravity"];

storiesOf('circulation-web/Autocomplete', module)
  .add('default', () => (
    <Autocomplete 
      autocompleteValues={autocompleteValues}
      disabled={false}
      name="test"
      label="Test"
      value="b"
    />
  ));