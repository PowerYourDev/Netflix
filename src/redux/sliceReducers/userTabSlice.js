import {createSlice} from "@reduxjs/toolkit"

const userTab = createSlice({
    name:"userTab",
    initialState:{
        currentUserTab:"/movies-browse"
    },
    reducers:{
        addCurrentUserTab:(state,action)=>{
           state.currentUserTab=action?.payload
        }
    }
})

export default  userTab.reducer
export const {addCurrentUserTab}=userTab.actions