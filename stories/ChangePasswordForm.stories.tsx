import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { ChangePasswordForm } from 'simplified-circulation-web/src/components/ChangePasswordForm';

storiesOf('circulation-web/ChangePasswordForm', module)
  .add('default', () => (
    <ChangePasswordForm csrfToken="" />
  ));