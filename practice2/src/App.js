import { Header } from "./Components/Header";
import "./App.css";
import { Footer } from "./Components/Footer";
import { Main } from "./Components/Main";
import { Register } from "./Components/Register";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Components/Login";
import { UserDashboard } from "./Components/UserDashboard";
import { AdminDashboard } from "./Components/AdminDashboard";
import { PrivateRoute } from "./Components/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/register" element={<Register />} />
      <Route path="/header" element={<Header />} />
      <Route path="/login" element={<Login />} />

      <Route element={<PrivateRoute />}>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user" element={<UserDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
