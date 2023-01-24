import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Hello",
      day: "23 08 2000",
      reminder: true,
    },
    {
      id: 2,
      text: "Zoheb",
      day: "09 09 2014",
      reminder: true,
    },
    {
      id: 3,
      text: "Testing",
      day: "23 08 2000",
      reminder: false,
    },
  ]);

  const name = "zoheb";
  const x = true;

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(tasks.map(item => item.id === id ? {...item, reminder: !item.reminder} : item))
  };

  return (
    <div className="container">
      <AddTask/>
      <Header />
      {tasks.length ? (
        <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} />
      ) : (
        "No Tasks to Show"
      )}
      {/* <h2>Hello {x ? name: "Anonymous"}</h2> */}
    </div>
  );
}

export default App;
