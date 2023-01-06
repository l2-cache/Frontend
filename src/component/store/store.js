import {applyMiddleware, createStore} from "redux";
import combineReducer from "./combineReducer";
import {logger} from "redux-logger/src";

export const store = createStore(combineReducer, applyMiddleware(logger));