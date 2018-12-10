import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import withDocs from 'storybook-readme/with-docs';
import StoryRouter from 'storybook-react-router';

import WidgetWrapperReadme from './README.md';
import WidgetWrapper from './';

storiesOf('WidgetWrapper', module)
  .addDecorator(StoryRouter())
  .add(
    'Primary',
    withDocs(WidgetWrapperReadme, () => (
      <WidgetWrapper
        type="primary"
        city="copenhagen"
        wind="5"
        humidity="55"
        temp="43"
        onClick={action('clicked')}>
        Primary
      </WidgetWrapper>
    ))
  );
