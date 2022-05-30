import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

const initialState = {
    greeting: 'Welcome to greeting app'
}

function rootReducer(state, action) {
    switch (action.type) {
        case 'GET_GREETING_SUCCESS':
            return {
                ...state,
                greeting: action.json.data
            }
        default:
            return state;
    }
}

export default function storeConfig() {
    const store = createStore(
        rootReducer, 
        initialState,
        applyMiddleware(thunk));
    return store;
}