import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Shared/Navbar";
import Appointment from './pages/Appointment/Appointment'
import Login from './pages/Login/Login'
import SignUp from "./pages/Login/SignUp";
import RequireAuth from "./pages/Shared/RequireAuth";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./pages/Dashboard/Dashboard";
import MyAppointments from "./pages/Dashboard/MyAppointments";
import MyReviews from './pages/Dashboard/MyReviews';
import Users from "./pages/Dashboard/Users";
import MyHistory from "./pages/Dashboard/MyHistory";
import RequireAdmin from "./pages/Shared/RequireAdmin";
import AddDoctors from "./pages/Dashboard/AddDoctors";
import ManageDoctor from "./pages/Dashboard/ManageDoctor";

function App() {
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
          <Route path=':myReview' element={<MyReviews />} />
          <Route path='users' element={
            <RequireAdmin>
              <Users />
            </RequireAdmin>
          }></Route>
          <Route path='addDoctors' element={
            <RequireAdmin>
              <AddDoctors />
            </RequireAdmin>
          }></Route>
          <Route path='manageDoctor' element={
            <RequireAdmin>
              <ManageDoctor />
            </RequireAdmin>
          }></Route>
          <Route path='myHistory' element={<MyHistory />} />
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}
//(server url) => https://doctors-portal-server-2nd-time.herokuapp.com/
export default App;
