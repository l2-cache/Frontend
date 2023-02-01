import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const rankingSlice = createSlice({
    // action에 대한 prefix 설정
    name: "ranking",

    // 초기 값
    initialState,
    reducers: {
        changeRanking: (state,action) => {
            return action.payload;
        },
    },
})

export const {changeRanking} = rankingSlice.actions;

export default rankingSlice.reducer;