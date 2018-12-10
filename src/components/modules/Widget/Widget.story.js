import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import withDocs from 'storybook-readme/with-docs';
import WidgetReadme from './README.md';
import Widget from './';

storiesOf('Widget', module)
    .add('Primary',
        withDocs(WidgetReadme,
            () => <Widget type="primary" onClick={action('clicked')} submitHandler={() => {
            }}>Primary</Widget>
        ));
