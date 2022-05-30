import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

const initialState = {
    greeting: 'Welcome to greeting app'
}

function rootReducer(state, action) {
    switch (action.type) {
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