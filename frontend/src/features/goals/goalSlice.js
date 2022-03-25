import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

import goalService from './goalService'

const initialState = {
    goals : [],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}

//Register user
export const createGoal = createAsyncThunk('goals/create', async (goalData,thunkAPI) => {   // that string i pass here, is coming as the action name, its appended with pending, rejected etc
    try {

        //i need the token here to be used when calling api. It can be here using thunk API like this
        const token = thunkAPI.getState().auth.user.token

        console.log("GOAL DATA", goalData)
    
        return await goalService.addGoal(goalData,token)

    } catch (error) {   
        const message = (error.response && error.response.data && error.response.data.message)||error.message||error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const goalSlice= createSlice({
    name:'goals',
    initialState,
    reducers :{
        reset : (state) => initialState
    },
    extraReducers : (builder)=>{
        builder
            .addCase(createGoal.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(createGoal.fulfilled,(state,action)=>{
                state.isLoading = false
                state.isSuccess = true
                state.goals.push(action.payload)
            })
            .addCase(createGoal.rejected,(state,action)=>{
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})


export const {reset} = goalSlice.actions
export default goalSlice.reducer