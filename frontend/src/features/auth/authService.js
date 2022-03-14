import axios from 'axios'

const API_URL = '/api/users'


const register = async (userData) =>{
    const resposne = await axios.post(API_URL,userData)

    if (resposne.data){
        localStorage.setItem('user',JSON.stringify(resposne.data))
    }

    return resposne.data
}



const login = async (userData) =>{
    const resposne = await axios.post(API_URL+'/login',userData)

    if (resposne.data){
        localStorage.setItem('user',JSON.stringify(resposne.data))
    }

    return resposne.data
}


//logout user
const logout = () =>{
    localStorage.removeItem('user')
}


const authService ={
    register,logout,login
}

export default authService

