import {logger} from "redux-logger/src";
import {configureStore} from "@reduxjs/toolkit";
import cityReducer from "./modules/CityData";
import apartReducer from "./modules/ApartData";
import chartReducer from "./modules/ChartInfo"
import leasableReducer from "./modules/LeasableData"
import rankingReducer from "./modules/RankingData"
import thunk from "redux-thunk";
export const store = configureStore({
    reducer: {
        city: cityReducer,
        apart: apartReducer,
        chartInfo: chartReducer,
        leasable: leasableReducer,
        ranking: rankingReducer
    },
    middleware: [logger, thunk]
});