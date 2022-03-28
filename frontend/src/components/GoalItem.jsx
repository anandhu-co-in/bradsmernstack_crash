import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'

const GoalItem = ({goal}) => {

    const dispatch=useDispatch()


  return (
    <div>
        {goal.text + goal.createdAt}
        <button onClick={()=>dispatch(deleteGoal(goal._id)) }>X</button>
    </div>
  )
}

export default GoalItem