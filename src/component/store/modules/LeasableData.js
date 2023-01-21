import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = "없습니다";

export const leasableSlice = createSlice({
    // action에 대한 prefix 설정
    name: "leasable",

    // 초기 값
    initialState,
    reducers: {
        changeLeasable: (state,action) => {

            return action.payload;
        }
    },
})

export const {changeLeasable} = leasableSlice.actions;

export default leasableSlice.reducer;