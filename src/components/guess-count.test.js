import React from 'react';
import {shallow} from 'enzyme';

import {GuessCount} from './guess-count';


describe('<GuessCount/>', () => {

    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Renders the guess count properly', () =>{
        const guessCount = 1;
        const wrapper = shallow(<GuessCount guessCount = {guessCount} />)
        expect(wrapper.text()).toEqual(`You've made ${guessCount} guess!`) 
    })


});