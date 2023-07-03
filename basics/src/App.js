import { useState } from "react";
import "./App.css";
import Greeting from "./Greeting";
import Post from "./Post";
function App() {
  const [state, setState] = useState([
    { name: "Zoheb", age: "22" },
    { name: "Devanshi", age: "21" },
    { name: "Zoheb", age: "22" },
    { name: "Devanshi", age: "21" },
    { name: "Zoheb", age: "22" },
    { name: "Devanshi", age: "21" },
    { name: "Zoheb", age: "22" },
    { name: "Devanshi", age: "21" },
  ]);

  return (
    <body>
     
      <Post name="/>




      {/* {
        state.map(item => <Greeting name={item.name} age={item.age}/>)
      } */}

    </body>
  );
}

export default App;
