import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { EditableConfigList, EditFormProps} from 'simplified-circulation-web/src/components/EditableConfigList';

interface Thing {
  id: number;
  label: string;
}

interface Things {
  things: Thing[];
}
let thingData = { id: 5, label: "label" };
let thingsData = { things: [thingData] };
class ThingEditForm extends React.Component<EditFormProps<Things, Thing>, {}> {
  render() {
    return <div>Test</div>;
  }
}

class ThingEditableConfigList extends EditableConfigList<Things, Thing> {
  EditForm = ThingEditForm;
  listDataKey = "things";
  itemTypeName = "thing";
  urlBase = "/admin/things/";
  identifierKey = "id";
  labelKey = "label";
}
const resolvePromise = new Promise<void>(resolve => resolve());

storiesOf('circulation-web/EditableConfigList', module)
  .add('default', () => (
    <ThingEditableConfigList
      data={thingsData}
      fetchData={() => new Promise<Things>(resolve => resolve())}
      csrfToken=""
      isFetching={false}
      editItem={(data) => resolvePromise}
      deleteItem={(data) => resolvePromise}
    />
  ));
