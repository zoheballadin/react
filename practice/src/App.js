import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"



function App() {
  const [tasks, setTasks] = useState(

    [{
        id: 1,
        text: "Hello",
        day: "23 08 2000",
        reminder: true
    },{
        id: 2,
        text: "Zoheb",
        day: "09 09 2014",
        reminder: true
    },{
        id: 3,
        text: "Testing",
        day: "23 08 2000",
        reminder: false
    }])

  const name = "zoheb"
  const x = true;

  const deleteTask = (id) =>{
    setTasks(tasks.filter(item => item.id !== id))
  }
  return (
    <div className="container">
     <Header/>
     <Tasks tasks={tasks} onDelete={deleteTask}/>
     {/* <h2>Hello {x ? name: "Anonymous"}</h2> */}
    </div>
  );
}

export default App;
