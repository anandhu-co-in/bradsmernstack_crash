import { useEffect } from "react"
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import GoalForm from "./GoalForm"

function Dashboard() {


  const navigate = useNavigate()
  const {user} = useSelector((state)=>state.auth) 

  useEffect(()=>{
    if(!user){
      navigate('/login')
    }
  },[user,navigate])


  return (
    <>
      <h1>Dashboard for user {user && user.name}</h1>
      <GoalForm/>
    </>
  )
}

export default Dashboard