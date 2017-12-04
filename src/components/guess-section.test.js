import React from 'react';
import {shallow} from 'enzyme';

import GuessSection from './guess-section';


describe('<GuessSection/>', () => {

    it('Renders without crashing', () => {
        shallow(<GuessSection />);
    });

    //  it('Renders a list of guesses properly', () => {
    //     const guesses = [1,2,3]
    //     const wrapper = shallow(<GuessList guesses = {guesses}/>);
    //     const items = wrapper.find('li');
    //     expect(items.length).toEqual(guesses.length);
    //     guesses.forEach((value, index) => {
    //     expect(items.at(index).text()).toEqual(value.toString()); 
    //      });
    //  });
});