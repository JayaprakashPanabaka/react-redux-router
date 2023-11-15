import {createStore} from 'redux'

const initialState = {
    balance: 0,
    name: '',
    contact: null,
}

const reducer = (state = initialState, actions) => {
    switch(actions.type) {
        case 'credit':
            return {...state, balance: state.balance + Number(actions.payload)}
        // case 'withdraw':
        //     return {...state, balance:actions.payload}
        // case 'updateContact':
        //     return {...state, contact: actions.payload}
        // case 'updateName':
        //     return {...state, name: actions.payload}
    }
    console.log(state);
}

const accountStore = createStore(reducer)
// accountStore.dispatch({type:'credit', payload: 2000});
// console.log(accountStore.getState());

export default accountStore