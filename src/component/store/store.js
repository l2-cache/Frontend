import {logger} from "redux-logger/src";
import {configureStore} from "@reduxjs/toolkit";
import cityReducer from "./modules/CityData";
export const store = configureStore({
    reducer: {
        city: cityReducer
    },
    middleware: [logger]
});