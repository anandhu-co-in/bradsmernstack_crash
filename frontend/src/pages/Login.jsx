import {useState,useEffect} from 'react'

import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {login,reset} from '../features/auth/authSlice'

function Login() {

  const [formData,setFormData]=useState({ 
    email:'',
    password:''
  })
  
  
  const onsubmit=(e)=>{
    e.preventDefault();

    const userData = {
      email,
      password
    }

    dispatch(login(userData))
  }


  const onChange=(e)=>{
    setFormData((preveState)=>{
      return  {...preveState, [e.target.name]:e.target.value}
    })
  }


  const {email,password} = formData


  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user,isLoading,isError,isSuccess,message} =useSelector(state=>state.auth)

  useEffect(()=>{

    if(isError){
      toast.error("toast in useEffeect : "+message)
    }

    if(isSuccess||user){
      navigate('/')
    }

    dispatch(reset())

  },[user,isError,isSuccess,message,navigate,dispatch])

  if(isLoading){
    return <><h1>SPINNER</h1></>
  }

  console.log(formData);

  return (
    
    <div onSubmit={onsubmit}>
      <h1>Login and Start Setting Goals</h1>
      <form>
        <input type='email' placeholder='Enter Email' id='email' name='email' value={email} onChange={onChange}></input> <br />
        <input type='password' placeholder='Enter Password' id='password' name='password' value={password} onChange={onChange}></input> <br />
        <input type='submit'/>
      </form>

    </div>
  )



}

export default Login