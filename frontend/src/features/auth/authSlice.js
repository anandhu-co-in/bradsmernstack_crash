import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'


const user = JSON.parse(localStorage.getItem('user')) //try without json.parse and see what happens

const initialState = {
    user : user?user:null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}


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
    extraReducers :()=>{
        //we will be using this to write async reducesrs, in future
    }
})



export const {reset} = authSlice.actions
export default authSlice.reducer