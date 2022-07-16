import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useState } from "react";
import Navbar from "./pages/Shared/Navbar";
import Appointment from './pages/Appointment/Appointment'
import Login from './pages/Login/Login'
import SignUp from "./pages/Login/SignUp";
import RequireAuth from "./pages/RequireAuth/RequireAuth";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./pages/Dashboard/Dashboard";
import MyAppointments from "./pages/Dashboard/MyAppointments";
import MyReviews from './pages/Dashboard/MyReviews';
import Admin from "./pages/Dashboard/Admin";

function App() {
  const [theme, setTheme] = useState(false)
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyAppointments />} />
          <Route path='admin' element={<Admin />} />
          <Route path=':myReview' element={<MyReviews />} />
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
