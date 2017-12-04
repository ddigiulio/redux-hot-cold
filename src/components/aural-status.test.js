import React from 'react';
import {shallow} from 'enzyme';

import {AuralStatus} from './aural-status';
import {generateAuralUpdate} from '../actions';

describe('<AuralStatus/>', () => {

    it('Renders without crashing', () => {
        shallow(<AuralStatus auralStatus="" />);
    });

    it('Renders the auralStatus', () => {

        const auralStatus = 'Foo';
        const wrapper = shallow(
            <AuralStatus auralStatus={auralStatus}/>
        );
        expect(wrapper.contains(auralStatus)).toEqual(true);
    });


});