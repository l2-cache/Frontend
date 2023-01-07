import {logger} from "redux-logger/src";
import {configureStore} from "@reduxjs/toolkit";
import cityReducer from "./modules/CityData";
import apartReducer from "./modules/ApartData";
import thunk from "redux-thunk";
export const store = configureStore({
    reducer: {
        city: cityReducer,
        apart: apartReducer
    },
    middleware: [logger, thunk]
});