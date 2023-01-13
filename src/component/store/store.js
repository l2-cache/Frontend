import {logger} from "redux-logger/src";
import {configureStore} from "@reduxjs/toolkit";
import cityReducer from "./modules/CityData";
import apartReducer from "./modules/ApartData";
import chartReducer from "./modules/ChartInfo"
import thunk from "redux-thunk";
export const store = configureStore({
    reducer: {
        city: cityReducer,
        apart: apartReducer,
        chartInfo: chartReducer
    },
    middleware: [logger, thunk]
});