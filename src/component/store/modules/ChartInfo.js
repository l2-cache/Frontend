import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    apartName: undefined,
    fullAddress: undefined,
    netLeasableAreas: [],
    tradingHistories: [],
};

export const chartSlice = createSlice({
    // action에 대한 prefix 설정
    name: "chartInfo",

    // 초기 값
    initialState,
    reducers: {
        getChartInfo: (state,action) => {
            return {...action.payload};
        }
    },
})

export const {getChartInfo} = chartSlice.actions;

export default chartSlice.reducer;