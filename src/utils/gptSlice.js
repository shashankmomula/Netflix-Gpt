import { createSlice } from "@reduxjs/toolkit"

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptpSearch:false,
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptpSearch=!state.showGptpSearch;
        },
    },
});

export const {toggleGptSearchView} = gptSlice.actions;
export default gptSlice.reducer;