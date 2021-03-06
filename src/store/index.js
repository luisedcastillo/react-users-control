import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import nonameReducer from './../reducers';

const initializeState = {
    //users: []
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(nonameReducer, initializeState, composeEnhancers(applyMiddleware(promiseMiddleware)));
