import React from 'react';
import {shallow} from 'enzyme';

import {GuessList} from './guess-list';


describe('<GuessList/>', () => {

    it('Renders without crashing', () => {
        shallow(<GuessList guesses = {[]}/>);
    });

     it('Renders a list of guesses properly', () => {
        const guesses = [1,2,3]
        const wrapper = shallow(<GuessList guesses = {guesses}/>);
        const items = wrapper.find('li');
        expect(items.length).toEqual(guesses.length);
        guesses.forEach((value, index) => {
        expect(items.at(index).text()).toEqual(value.toString()); 
         });
     });
});