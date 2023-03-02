import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import Cal, {getCalApi} from "@calcom/embed-react"

function App() {
  const getEvents = async() =>{
    try {
      let {data} = await axios.post("https://api.cal.com/v1/bookings/?apiKey=cal_live_f23b424d8e7289c04b3ff5da96c4af05", {
        title: "interview",
        startTime: "Sun Mar 05 2023 12:00:00 GMT+0530",
        endTime: "Sun Mar 05 2023 13:00:00 GMT+0530"
      })
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  // getEvents()

  useEffect(() => {
    (async function () {
      const Cal = await getCalApi();
      Cal("on", {
        action: "*",
        callback: (e) => {
          console.log(e.detail);
        }
      });
    })();
  }, []);
  return (

    
    <div className="App">
     <Cal
    calLink="zoheballadin/interview-ci2023"
    config={{
      // name: "Zoheb Alladin",
      // email: "zoheballadin1@gmail.com",
      notes: "Interview",
      // guests: ["janedoe@gmail.com"],
      theme: "dark",
    }}
  />
    </div>
  );
}

export default App;
