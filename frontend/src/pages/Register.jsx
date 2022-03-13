import {useState,useEffect} from 'react'

import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {register,reset} from '../features/auth/authSlice'

function Register() {


  const [formData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
    password2:''
  })
  
  const {name,email,password,password2} = formData
  
  const onsubmit=(e)=>{
    e.preventDefault();
    if(password !== password2){
      toast.error('Passwords do not match')
    }else{
      const userData={
        name,
        email,
        password
      }

      dispatch(register(userData))
    }

  }
  

  useEffect(()=>{

    if(isError){
      toast.error(message)
    }

    if(isSuccess||user){
      navigate('/')
    }

    dispatch(reset())


  },[user,isError,isSuccess,message,navigate,dispatch])


  const onChange=(e)=>{
    setFormData((preveState)=>{
      return  {...preveState, [e.target.name]:[e.target.value]}
    })
  }


  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const {user,isLoading,isError,isSuccess,message} =useSelector(state=>state.auth)

  console.log(formData);

  if(isLoading){
    return <><h1>SPINNER</h1></>
  }

  return (
    
    <div onSubmit={onsubmit}>
      <h1>Register</h1>
      <form>
        <input type='text' placeholder='Enter name' id='name' name='name' value={name} onChange={onChange}></input> <br />
        <input type='email' placeholder='Enter Email' id='email' name='email' value={email} onChange={onChange}></input> <br />
        <input type='password' placeholder='Enter Password' id='password' name='password' value={password} onChange={onChange}></input> <br />
        <input type='password' placeholder='Confirm Password' id='password2' name='password2' value={password2} onChange={onChange}></input> <br />
        <input type='submit'/>
      </form>

    </div>
  )
}

export default Register