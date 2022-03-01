import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { JsonClient } from '../../Config'

const initialState ={
    data:[],
    pm_timecards:[],
    status:'idle',
    error:''
}
export const fetchTimecardThunk =createAsyncThunk('timecard/fetchTimeCardThunk',async(user_id) =>{
    const response = await JsonClient.get('wbs/user/time-card/list/'+user_id+'/')
    console.log('time card for user',response.data)
    return response.data
})
export const fetchAllTimecardsPmThunk= createAsyncThunk('timecard/fetchAllTimecardsPm',async(user_id) =>{
    const response = await JsonClient.get('wbs/pm-wise/all-time-card/list/'+user_id+'/')
    console.log('pm',response.data[0])
    return response.data[0]
})

export const timecardSlice = createSlice({
    name:'timecardList',
    initialState,
    reducers:{},
    extraReducers:{
        [fetchTimecardThunk.pending]:(state,action) =>{
            state.status = 'loading'
        },
        [fetchTimecardThunk.fulfilled]:(state,action) =>{
            state.status = 'succeeded'
            state.data = action.payload
        },
        [fetchTimecardThunk.rejected]:(state,action) =>{
            state.status = 'failed'
            state.error = action.error.message
        },
        [fetchAllTimecardsPmThunk.pending] :(state,action) =>{
            state.status='loading'
        },
        [fetchAllTimecardsPmThunk.fulfilled]:(state,action) =>{
            state.status ='succeded'
            state.pm_timecards= action.payload
       
        },
        [fetchAllTimecardsPmThunk.rejected]:(state,action)=>{
            state.status='failed'
            state.error = action.error.message
        }
    }
})
export default timecardSlice.reducer