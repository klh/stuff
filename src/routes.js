import React from 'react';

import {asyncComponent} from '@jaredpalmer/after';

const asyncDefautComponent = () => {
  return asyncComponent({
    loader: () => import('./components/modules/WidgetWeather'), // required
    Placeholder: () => <div>...LOADING...</div> // this is optional, just returns null by default
  })
};

export default [
  {
    path: '/:city',
    exact: true,
    component: asyncDefautComponent()
  },
  {
    path: '/', // catch default routes
    exact: true,
    component: asyncDefautComponent()
  }
];
