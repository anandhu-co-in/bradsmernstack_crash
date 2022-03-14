import {useState,useEffect} from 'react'

import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {register,reset} from '../features/auth/authSlice'

function Register() {


  const navigate = useNavigate()
  const dispatch = useDispatch()


  const [formData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
    password2:''
  })
  
  const {name,email,password,password2} = formData


  const {user,isLoading,isError,isSuccess,message} =useSelector(state=>state.auth)
  
  const onsubmit=(e)=>{
    e.preventDefault();
    console.log(password==password2)
    if(password !== password2){
      toast.error('Passwords do not match'+ password + password2)
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
      toast.error("toast in useEffeect : "+message)
    }

    if(isSuccess||user){
      navigate('/')
    }

    dispatch(reset())

  },[user,isError,isSuccess,message,navigate,dispatch])

  
  //To update the form data as I type into the fields
  const onChange=(e)=>{
    setFormData((preveState)=>{
      return  {...preveState, [e.target.name]:e.target.value} // I need to understand why square brackets needed in left side of colon
    })
  }

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