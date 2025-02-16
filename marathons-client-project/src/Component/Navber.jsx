import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthenticationContext } from '../Provider/AuthProvider';
import logo from '../assets/logo.png';

const Navber = () => {
  const { currentUser, logoutUser } = useContext(AuthenticationContext);

  const handleLogout = () => {
    logoutUser();
  };

  return (
<section className='bg-gradient-to-r from-black to-gray-800'>
<div className={`w-full md:w-11/12 mx-auto relative `}>
      <div className="w-full flex  justify-center items-center">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown relative z-10">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5"
  fill="none"
  viewBox="0 0 24 24"
  stroke="white" // Set the stroke color to white
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M4 6h16M4 12h8m-8 6h16"
  />
</svg>
              </div>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow bg-black'
              >
                <NavLink
                  className={({ isActive }) =>
                    `text-lg font-bold ${isActive ? 'text-red-500 underline'  : 'text-white'}`
                  }
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `text-lg font-bold ${isActive ? 'text-red-500 underline' : 'text-white'}`
                  }
                  to="/marathons"
                >
                 Marathons
                </NavLink>
                {currentUser && (
                  <NavLink
                    className={({ isActive }) =>
                      `text-lg font-bold ${isActive ? 'text-red-500 underline'  : 'text-white'}`
                    }
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                )}
               
              
             
              </ul>
            </div>
            <img src={logo} className="md:h-10 md:w-10 w-8 h-8" alt="Logo" />
            <a className={`ml-2 text-white font-bold text-lg md:text-2xl`}>Race<span className='text-red-500'>Flow</span></a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-5">
            <NavLink
                  className={({ isActive }) =>
                    `text-lg font-bold ${isActive ? 'text-red-500 underline'  : 'text-white'}`
                  }
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `text-lg font-bold ${isActive ? 'text-red-500 underline' : 'text-white'}`
                  }
                  to="/marathons"
                >
                 Marathons
                </NavLink>
                {currentUser && (
                  <NavLink
                    className={({ isActive }) =>
                      `text-lg font-bold ${isActive ? 'text-red-500 underline'  : 'text-white'}`
                    }
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                )}
            </ul>
          </div>
          <div className="navbar-end">
            {currentUser ? (
              <div className="flex gap-3 justify-center items-center">
                <img
                  src={currentUser.photoURL}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                  title={currentUser.displayName}
                />
                <button
                  className="btn text-lg rounded-full bg-orange-500 text-white"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-2 md:gap-5">
                <NavLink
                  to="/login"
                  className="btn text-lg rounded-full bg-orange-500 text-white"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/reg"
                  className="btn text-lg rounded-full bg-orange-500 text-white"
                >
                  Register
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
</section>
  );
};

export default Navber;
