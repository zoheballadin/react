import axios from 'axios';
import {  useState } from 'react';
import './App.css';
import { Profile } from './Profile';
import { Main } from './Main';
import {Route, Routes} from "react-router-dom"

function App() {
  let options = {
    auth: {
      username: "zoheballadin",
      password: "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"
    }
  }

  let [loading, setLoading] = useState(false)
  let [alert, setAlert] = useState({})
  let [data, setData] = useState([]) 
  

  const getBooks = async() =>{
    let res = await axios.get(`https://api.github.com/users`, options)
    setData(res.data)
}

  let search = async (name) => {
    try {
      if(!name){
        return showAlert({
          type: "error",
          msg: "Input field cannot be empty"
        })
      }
      setLoading(true)
      let res = await axios.get(
        `https://api.github.com/search/users?q=${name}`, options
      );
      showAlert({type:"success", msg: "Search Successful"})
      res = res.data.items;
      console.log(res);
      setData(res);
      setLoading(false)

    } catch (error) {
      console.log(error);
    }
  };

  // console.log(data[1].login)
  const showAlert = alertData =>{
    setAlert(alertData)
    setTimeout(()=>{
      setAlert(null)
    },3000)
  }
  
  return (
    <Routes>
      <Route path='/' element={<Main loading={loading} getBooks={getBooks} data={data} setData={setData} search={search} showAlert={showAlert} alert={alert}/>} />
      <Route path='/profile/:username' element={<Profile setLoading={setLoading} loading={loading}/>}/>
    </Routes>
  );
}

export default App;
