import React from 'react'
import { combineReducers, applyMiddleware, createStore }from "redux";
import thunk from "redux-thunk";
import LoginReducer from '../_reducers/LoginReducer';

const rootReducer = combineReducers({
    LoginR:LoginReducer
})

const middleware = [thunk];

 const store = createStore(rootReducer, applyMiddleware(...middleware));

 export default store;