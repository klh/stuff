import React from 'react';
import {mount} from "enzyme/build";

import Widget from './';


describe('<Widget />', () => {

    it('Snapshot mathes', () => {
        const WidgetRender = mount(<Widget/>);
        expect(WidgetRender).toMatchSnapshot();
    });

});

