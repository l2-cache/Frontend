import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const getApart = createAsyncThunk("GET_APART", async (data) => {
    const response = await axios.get(process.env.REACT_APP_BACKEND +'/find-city?city=' + data.name);
    console.log(response.data);
    return response.data;
    // return {
    //     name: data.name,
    //     x: data.x,
    //     y: data.y,
    //     apart: response.data
    // };
});

export const apartSlice = createSlice({
    name: "apart",

    initialState,
    reducers: {
    },
    extraReducers: {
        [getApart.fulfilled]: (state, {payload}) => [...payload],
    },
})

export default apartSlice.reducer;
