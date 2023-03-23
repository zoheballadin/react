
import { useState } from 'react';
import './App.css';
import { BarChart } from './Components/BarChart';
import { LineChart } from './Components/LineChart';
import { PieChart } from './Components/PieChart';
import {UserData} from "./Data"

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map(item => item.year),
    datasets: [{
      label : "users gained",
      data: UserData.map(item => item.userGain),
      backgroundColor: ["purple", "green", "blue", "black", "red"],
      borderColor: "black",
      borderWidth: 2
    }]
  })
  return (
    <div>
    <div className="App" style={{width: "500px"}}>
      <BarChart chartData={userData}/>
    </div>
    <div className="App" style={{width: "500px"}}>
      <LineChart chartData={userData}/>
    </div>
    <div className="App" style={{width: "500px"}}>
      <PieChart chartData={userData}/>
    </div>
    </div>
  );
}

export default App;
