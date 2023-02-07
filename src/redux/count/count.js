import { createSlice } from '@reduxjs/toolkit'

export const countSlice = createSlice({
    name:'count',

    initialState:{
        value:0
    },

    reducers:{
        CountIncriment:(state)=>{
            state.value = state.value +1
        },
        CountDicriment:(state)=>{
            state.value = state.value - 1
        }
    }
})
export const {CountIncriment,CountDicriment} = countSlice.actions
export default countSlice.reducer