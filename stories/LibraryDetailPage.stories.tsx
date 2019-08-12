import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { LibraryDetailPage } from "simplified-registry-admin/src/components/LibraryDetailPage";
import BuildStore from "simplified-registry-admin/src/store";
// import { testLibrary1 } from "simplified-registry-admin/src/components/__tests__/TestUtils";

const testLibrary1 = {
  uuid: "UUID1",
  basic_info: {
    "name": "Test Library 1",
    "short_name": "lib1",
    "description": undefined
  },
  urls_and_contact: {
    "authentication_url": "auth1",
    "contact_email": "email1",
    "opds_url": "opds1",
    "web_url": "web1"
  },
  stages: {
    "library_stage": "production",
    "registry_stage": "testing"
  },
  areas: {
    "focus": ["10025 (NY)", "Stratford (ON)", "33154 (FL)"],
    "service": []
  }
};

storiesOf('registry-admin/LibraryDetailPage', module)
  .add('default', () => (
    <LibraryDetailPage
      library={testLibrary1}
      store={BuildStore()}
      updateColor={null}
      editStages={null}
      fetchLibrary={null}
    />
  ));