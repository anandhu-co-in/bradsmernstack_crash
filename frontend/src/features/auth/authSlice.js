import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

import authService from './authService'

const user = JSON.parse(localStorage.getItem('user')) //try without json.parse and see what happens

const initialState = {
    user : user?user:null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}


 
//Register user
export const register = createAsyncThunk('auth/register', async (user,thunkAPI) => {   // that string i pass here, is coming as the action name, its appended with pending, rejected etc
    try {
        return await authService.register(user)
    } catch (error) {   
        const message = (error.response && error.response.data && error.response.data.message)||error.message||error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


//login user
export const login = createAsyncThunk('auth/login', async (user,thunkAPI) => {
    try {
        return await authService.login(user)
    } catch (error) {   
        const message = (error.response && error.response.data && error.response.data.message)||error.message||error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


//Logout user
export const logout = createAsyncThunk('auth/logout', async () => {
    await authService.logout()
})



export const authSlice= createSlice({
    name:'auth',
    initialState,
    reducers :{
        //non asynch reducers come here
        //but i have no idea why below functon doesent return the updated sstate, and also why i cant write comma after eadh line
        reset : (state) => {
            state.isLoading = false
            state.isSuccess=false
            state.isError=false
            state.message=''
        }
    },
    extraReducers :(builder)=>{
        //we will be using this to write async reducesrs, in future

        builder.addCase(register.pending, (state)=>{
            state.isLoading=true
        })
        .addCase(register.fulfilled, (state,action)=>{
            state.isLoading=false
            state.isError=false
            state.user=action.payload
        })
        .addCase(register.rejected,(state,action) =>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
        .addCase(login.pending, (state)=>{
            state.isLoading=true
        })
        .addCase(login.fulfilled, (state,action)=>{
            state.isLoading=false
            state.isError=false
            state.user=action.payload
        })
        .addCase(login.rejected,(state,action) =>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
        .addCase(logout.fulfilled, (state)=>{
            state.user=null
        })

    }
})



export const {reset} = authSlice.actions
export default authSlice.reducer