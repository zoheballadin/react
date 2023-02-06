import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { User } from './User';
import { Search } from './Search';
import { Profile } from './Profile';
import { Main } from './Main';
import {Route, Routes} from "react-router-dom"
function App() {
  

  
  
  

  // console.log(data[1].login)
  
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/profile/:username' element={<Profile/>}/>
    </Routes>
  );
}

export default App;
