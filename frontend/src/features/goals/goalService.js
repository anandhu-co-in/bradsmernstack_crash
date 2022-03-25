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



const goalService ={
    addGoal
}

export default goalService

