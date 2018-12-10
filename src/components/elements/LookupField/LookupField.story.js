import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import withDocs from 'storybook-readme/with-docs';
import LookupFieldReadme from './README.md';
import LookupField from './';

storiesOf('LookupField', module)
    .add('Primary',
        withDocs(LookupFieldReadme,
            () => <LookupField type="primary" onClick={action('clicked')} submitHandler={() => {
            }}>
                <span>some text to render children</span><br/>
            </LookupField>
        ));
