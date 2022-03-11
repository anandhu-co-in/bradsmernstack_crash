import {useState,useEffect} from 'react'


function Register() {


  const [formData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
    password2:''
  })
  
  
  const onsubmit=(e)=>{
    e.preventDefault();
  }


  const onChange=(e)=>{
    setFormData((preveState)=>{
      return  {...preveState, [e.target.name]:[e.target.value]}
    })
  }


  const {name,email,password,password2} = formData

  console.log(formData);

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