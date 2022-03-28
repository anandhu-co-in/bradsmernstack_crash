import axios from 'axios'


const API_URL = '/api/goals'

//register aynchronous funtion, it calls api and returns response
const addGoal = async (goalData,token) =>{

    //since we need to pass the token as this is a protected route, we use config
    const config ={
        headers:{
            Authorization : `Bearer ${token}`
        }
    }

    console.log("From addGoal, ", goalData)
    const resposne = await axios.post(API_URL,goalData,config)

     return resposne.data
}


//register aynchronous funtion, it calls api and returns response
const deleteGoal = async (id,token) =>{

    //since we need to pass the token as this is a protected route, we use config
    const config ={
        headers:{
            Authorization : `Bearer ${token}`
        }
    }

    const resposne = await axios.delete(API_URL+`/${id}`,config)

    return resposne.data
}


//register aynchronous funtion, it calls api and returns response
const getGoals = async (token) =>{

    //since we need to pass the token as this is a protected route, we use config
    const config ={
        headers:{
            Authorization : `Bearer ${token}`
        }
    }

    const resposne = await axios.get(API_URL,config)

     return resposne.data
}



const goalService ={
    addGoal,
    getGoals,
    deleteGoal
}

export default goalService

