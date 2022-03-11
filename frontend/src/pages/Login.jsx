import {useState,useEffect} from 'react'

function Login() {

  const [formData,setFormData]=useState({ 
    email:'',
    password:''
  })
  
  
  const onsubmit=(e)=>{
    e.preventDefault();
  }


  const onChange=(e)=>{
    setFormData((preveState)=>{
      return  {...preveState, [e.target.name]:[e.target.value]}
    })
  }


  const {email,password} = formData

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