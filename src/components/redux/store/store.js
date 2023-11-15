import {createStore} from 'redux'

// declaring initial state of the store
const initialState = 0;

// Creating a reducer fuction

export const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    RESET: 'reset'
}

const reducerCounter = (state = initialState, actions)=> {
    switch(actions.type) {
        case ACTIONS.INCREMENT:
            return state + 1
        case ACTIONS.DECREMENT :
            return state - 1
        case ACTIONS.RESET:
            return state = 0
        default:
            return state
    }
}

let counterStore  = createStore(reducerCounter)
// reducerCounter()

export default counterStore

