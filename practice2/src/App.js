import { Header } from './Components/Header';
import './App.css';
import { Footer } from './Components/Footer';
import { Main } from './Components/Main';
import { Register } from './Components/Register';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/header" element={<Header/>}/>
    </Routes>
  );
}

export default App;
