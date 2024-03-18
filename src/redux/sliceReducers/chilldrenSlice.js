import { createSlice } from "@reduxjs/toolkit";


const childrenSlice = createSlice({
    name:"childrenSlice",
    initialState:{
        children:null
    },
    reducers:{
        addChildrenMovies:(state,action)=>{
         state.children=action.payload
   
        },
       
    }
})

export default childrenSlice.reducer
export const {addChildrenMovies}= childrenSlice.actions