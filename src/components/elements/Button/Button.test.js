import React from 'react';
import {render} from 'enzyme';

import Button from './';

describe('<Button />', () => {

    it('Snapshot mathes', () => {
        const ButtonRender = render(<Button>snapshot</Button>);
        expect(ButtonRender).toMatchSnapshot();
    });

    /*
    // Jest/ Enzyme does not yet support react.memo - but it'll be released in a week or so, then it would be good to test like so:

    it('No Children should match Default Text', () => {
        const defText = 'Default Button Text';
        const ButtonRender = mount(<Button/>);
        //expect(ButtonRender).toHaveText(defText);
        console.log(ButtonRender.text())
    });

    */

});

