import reducer from './index';
import {generateAuralUpdate, makeGuess, restartGame} from '../actions';

describe('reducer', () => {
    // Set up some dummy data
    const guesses = [];
    const feedback= "Make your guess!";
    const auralStatus ='';
    const correctAnswer = Math.round(Math.random() * 100) + 1;


    it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            guesses: [],
            feedback: "Make your guess!",
            auralStatus: "",
            correctAnswer: state.correctAnswer
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('restartGame', () => {
        it('Should restart the game', () => {
            let state;
            let correctAnswer = 1
            state = reducer(state, restartGame(correctAnswer));
            expect(state).toEqual({
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: correctAnswer
            });
        });
    });

    describe('makeGuess', () => {
        it('Should make a guess', () => {
            let state = {
                guesses : [],
                feedback: "",
                auralStatus: "",
                correctAnswer: 50
            };

            state = reducer(state, makeGuess(100));
            expect(state).toEqual({
            guesses:  [...state.guesses],
            feedback: "You're Ice Cold...",
            auralStatus: "",
            correctAnswer: 50
        });
        
            state = reducer(state, makeGuess(60));
            expect(state).toEqual({
            guesses:  [...state.guesses],
            feedback: "You're Warm.",
            auralStatus: "",
            correctAnswer: 50
        });
        
            state = reducer(state, makeGuess(50));
            expect(state).toEqual({
            guesses:  [...state.guesses],
            feedback: "You got it!",
            auralStatus: "",
            correctAnswer: 50
            });
        });
    });

    describe('generateAuralUpdate', () => {
        it ('Should generate aural updates', () =>{
            let state = {
                guesses: [10,1],
                feedback: "You're Cold...",
                auralStatus: "",              
            }

            state = reducer(state, generateAuralUpdate());
            expect(state.auralStatus).toEqual("Here's the status of the game right now: You're Cold... You've made 2 guesses. In order of most- to least-recent, they are: 1, 10")
        });
    })

});
