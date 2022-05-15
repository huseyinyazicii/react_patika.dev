import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getQuotesAsync = createAsyncThunk('quotes/getQuotesAsync', async() => {
    const response = await axios(`${process.env.REACT_APP_BASE_URL}/quotes`);
    return response.data;
});

export const quotesSlice = createSlice({
    name: 'quotes',
    initialState: {
        items: [],
        status: 'idle',
        error: undefined,
    },
    reducers: {},
    extraReducers: {
        [getQuotesAsync.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getQuotesAsync.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = 'succeeded';
        },
        [getQuotesAsync.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;  
        },
    },
});

export default quotesSlice.reducer;