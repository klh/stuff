import React from 'react';

import {asyncComponent} from '@jaredpalmer/after';

export default [
    {
        path: '/:city',
        exact: true,
        component: asyncComponent({
            loader: () => import('./WeatherWidget'), // required
            Placeholder: () => <div>...LOADING...</div> // this is optional, just returns null by default
        })
    },
    {
        path: '/',  // catch default routes
        exact: true,
        component: asyncComponent({
            loader: () => import('./WeatherWidget'),
            Placeholder: () => <div>...LOADING...</div>
        })

    }
];
