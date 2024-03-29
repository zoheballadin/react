import './App.css';
import { AddTask } from './AddTask';
import { useState } from 'react';
import { Tasks } from './Tasks';


function App() {
  
  const addTask = (task) =>{
    let id = Math.floor(Math.random()*1000)
    task = {id, ...task}
    setTasks([...tasks, task])
  }

  const [showAddTask, setShowAddTask] = useState(false)

  

  
  const deleteTask = (id) =>{
    setTasks(tasks.filter(item => item.id !== id))
  }
  const [tasks, setTasks] = useState([])
  return (
  

    <div className="App" style={{ color: "white"}}>
      <h1 style={{color: "white"}}>Task Manager</h1>
      {showAddTask && <AddTask onAdd={addTask}/>}
      <br />
      <Tasks tasks={tasks} showAddTask={()=>setShowAddTask(!showAddTask)} onDelete={deleteTask} showValue={showAddTask}/>
    </div>
  );
}

export default App;
