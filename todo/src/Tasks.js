import React from 'react'
import { Task } from './Task'
export const Tasks = ({tasks, onDelete, showAddTask}) => {
  return (
    <div>
        <button style={{padding: "10px"}} onClick={showAddTask}>{showAddTask ? "Hide" : "Add"}</button>
        {tasks.map(item => {
            return <Task task={item} onDelete={onDelete}/>
        })}
    </div>
  )
}
