import {useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'

function GoalForm() {

  const dispatch = useDispatch()

  const [goal,setgoal]=useState('')
  
  const onsubmit=(e)=>{
    e.preventDefault();
    setgoal('')

    console.log("dispatching", goal);
    // dispatch(createeGoal(goal)) // Need to create createGoal Function
  }


  const navigate = useNavigate()

  return (
    
    <div onSubmit={onsubmit}>
      <form>
        <input type='text' placeholder='Enter Goal' id='goal' name='goal' value={goal} onChange={(e)=>setgoal(e.target.value)}></input> <br />
        <input type='submit' disabled={!goal?'disabled':''}/>/
      </form>

    </div>
  )



}

export default GoalForm