import React from 'react'
import { Task } from './Task'
export const Tasks = ({tasks, onDelete, showAddTask, showValue}) => {
  return (
    <div>
        <button className={showValue ? "showHide" : "showAdd"} style={{padding: "10px"}} onClick={showAddTask}>{showValue ? "Hide" : "Add"}</button>
        {tasks.map(item => {
            return <Task task={item} onDelete={onDelete}/>
        })}
    </div>
  )
}
