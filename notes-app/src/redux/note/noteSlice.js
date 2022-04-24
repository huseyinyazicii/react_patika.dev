import { createSlice, nanoid } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name: 'note',
    initialState: {
        notes: localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : [],
        search: "",
    },
    reducers: {
        addNote: {
            reducer: (state, action) => {
                state.notes.push(action.payload);
                localStorage.setItem("notes", JSON.stringify(state.notes));
            },
            prepare: ({title, content, color}) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        color,
                    },
                };
            },
        },
        removeNote: (state, action) => {
            const index = state.notes.findIndex((item) => item.id === action.payload);
            state.notes.splice(index,1);
            localStorage.setItem("notes", JSON.stringify(state.notes));
        },
        updateSearch: (state, action) => {
            state.search = action.payload.toLowerCase();
        },
    },
});

export const { addNote, removeNote, updateSearch } = noteSlice.actions;
export default noteSlice.reducer;