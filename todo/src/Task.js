import React from 'react'
import {AiOutlineDelete} from "react-icons/ai"
export const Task = ({task, onDelete}) => {
  return (
    <div>
        <h3>{task.text} <AiOutlineDelete className='delete' onClick={()=>onDelete(task.id)}/> </h3> 
        <p>Deadline: {task.day}</p>
    </div>
  )
}
