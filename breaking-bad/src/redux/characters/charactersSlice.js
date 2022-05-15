import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const character_limit = 12;

export const getCharactersAsync = createAsyncThunk('characters/getCharactersAsync', async(page) => {
    const response = await axios(`${process.env.REACT_APP_BASE_URL}/characters?limit=${character_limit}&offset=${character_limit * page}`);
    return response.data;
});

export const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
        items: [],
        status: 'idle',
        error: undefined,
        page: 0,
        hasNextPage: true,
    },
    reducers: {},
    extraReducers: {
        // All Characters
        [getCharactersAsync.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getCharactersAsync.fulfilled]: (state, action) => {
            state.items = [...state.items, ...action.payload];
            state.status = 'succeeded';
            state.page += 1;

            if(action.payload.length < 12){
                state.hasNextPage = false;
            }
        },
        [getCharactersAsync.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;  
        },
    },
});

export default charactersSlice.reducer;