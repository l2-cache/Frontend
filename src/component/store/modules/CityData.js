import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name: '노원구',
    x: 37.65438,
    y: 127.056389
};

export const citySlice = createSlice({
    // action에 대한 prefix 설정
    name: "city",

    // 초기 값
    initialState,
    reducers: {
        changeValue: (state,action) => {
            return {...action.payload};
        }
    }
})

export const {changeValue} = citySlice.actions;

export default citySlice.reducer;