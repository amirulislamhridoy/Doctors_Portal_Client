import React from "react";
import { Link, Outlet } from "react-router-dom";
import auth from "../../Firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <section>
      <div className="drawer drawer-mobile">
        <input id="dashboard" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          
          <div className="bg-neutral min-h-[calc(100vh-64px)] py-10 px-8">
          <h2 className='text-3xl font-medium text-[#9B59B6]'>Welcome to your Dashboard.</h2>
            <Outlet />
          </div>
        </div>

        <div className="drawer-side ">
          <label htmlFor="dashboard" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-52 lg:bg-inherit bg-gray-50 text-base-content">
            <li><Link to="/dashboard">My Appointments</Link></li>
            <li><Link to="/dashboard/:reviews">My reviews</Link></li>
            <li><Link to="/dashboard/myHistory">My History</Link></li>
            {admin && <>
              <li><Link to="/dashboard/users">All Users</Link></li>
              <li><Link to="/dashboard/addDoctors">Add Doctor</Link></li>
              <li><Link to="/dashboard/manageDoctor">Manage Doctor</Link></li>
            </>}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
