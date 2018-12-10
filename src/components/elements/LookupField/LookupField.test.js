import React from 'react';
import {render} from 'enzyme';

import LookupField from './';

describe('<LookupField />', () => {

    it('Snapshot matches', () => {
        const ButtonRender = render(<LookupField submitHandler={() => {
        }}/>);
        expect(ButtonRender).toMatchSnapshot();
    });
});

