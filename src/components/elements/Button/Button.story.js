import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import withDocs from 'storybook-readme/with-docs';
import ButtonReadme from './README.md';
import Button from './';

storiesOf('Button', module)
  .add(
    'Primary',
    withDocs(ButtonReadme, () => (
      <Button type="primary" onClick={action('clicked')}>
        Primary
      </Button>
    ))
  )
  .add(
    'Dashed',
    withDocs(ButtonReadme, () => (
      <Button type="dashed" onClick={action('clicked')}/>
    ))
  )
  .add(
    'Danger',
    withDocs(ButtonReadme, () => (
      <Button type="danger" onClick={action('clicked')}>
        Danger
      </Button>
    ))
  )
  .add(
    'default',
    withDocs(ButtonReadme, () => (
      <Button onClick={action('clicked')}>default</Button>
    ))
  );
