import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";
import { signOut } from "firebase/auth";
import CustomLink from "../CustomLink/CustomLink";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    localStorage.removeItem('accessToken')
    signOut(auth);
  };
  const menu = (
    <>
      <li>
        <CustomLink to="/">Home</CustomLink>
      </li>
      <li>
        <CustomLink to="/appointment">Appointment</CustomLink>
      </li>
      <li>
        <CustomLink to="/reviews">Reviews</CustomLink>
      </li>
      <li className='min-w-fit'>
        <CustomLink to="/contactUs">Contact Us</CustomLink>
      </li>
      <li>
        <CustomLink to="/about">About</CustomLink>
      </li>
      {user && (
        <li>
          <CustomLink to="/dashboard">Dashboard</CustomLink>
        </li>
      )}
      <li className='min-w-fit'>
        {user ? (
          <CustomLink onClick={logout} to="/login">
            Sign Out
          </CustomLink>
        ) : (
          <CustomLink to="/login">Login</CustomLink>
        )}
      </li>
    </>
  );
  return (
    <>
      <nav className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menu}</ul>
        </div>
        <div className='navbar-end lg:hidden'>
          <label
            htmlFor="dashboard"
            className="btn  drawer-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
