import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Loading from "../components/Loading";
import auth from "../firbase.init";

export default function Navbar() {
  const [user, loading, error] = useAuthState(auth);

  const logOut = () => {
    signOut(auth);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <nav className="relative w-full flex flex-wrap items-center justify-between py-3 text-slate-900 shadow-md navbar navbar-expand-lg navbar-light">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <button
            className="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              className="w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              />
            </svg>
          </button>
          <div
            className="collapse navbar-collapse flex-grow items-center"
            id="navbarSupportedContent1"
          >
            <NavLink to="/">
              <img className="w-[170px]" src={Logo} alt="ImageNotfound" />
            </NavLink>
            {/* <NavLink
              to="/"
              className="text-xl text-slate-800 pr-2 font-semibold"
              href="/"
            >
              Doctor-Sheba
            </NavLink> */}
            {/* Left links */}
            <ul className="navbar-nav flex flex-col pl-0 list-style-none mx-auto">
              {/* <NavLink to="/" className="nav-item p-2">
                <li className="nav-link text-slate-800 opacity-75 hover:opacity-80 focus:opacity-100 focus:text-blue-500-500 focus:font-semibold p-0">
                  Home
                </li>
              </NavLink> */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-blue-500 nav-item p-2"
                    : "text-slate-800 opacity-75 nav-item p-2"
                }
              >
                <li> Home</li>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-blue-500 nav-item p-2"
                    : "text-slate-800 opacity-75 nav-item p-2"
                }
              >
                <li> About</li>
              </NavLink>
              <NavLink
                to="/appoint"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-blue-500 nav-item p-2"
                    : "text-slate-800 opacity-75 nav-item p-2"
                }
              >
                <li> Appointment</li>
              </NavLink>
              <NavLink
                to="/reviews"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-blue-500 nav-item p-2"
                    : "text-slate-800 opacity-75 nav-item p-2"
                }
              >
                <li> Reviews</li>
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-blue-500 nav-item p-2"
                    : "text-slate-800 opacity-75 nav-item p-2"
                }
              >
                <li> Contact Us</li>
              </NavLink>
              {/* <NavLink to="/appoint" className="nav-item p-2">
                <li
                  className="nav-link text-slate-800 opacity-75 hover:opacity-80 focus:text-blue-500-500 focus:font-semibold focus:opacity-80 p-0"
                  href="/"
                >
                  Appointment
                </li>
              </NavLink>
              <NavLink to="/reviews" className="nav-item p-2">
                <li
                  className="nav-link text-slate-800 opacity-75 hover:opacity-80 focus:opacity-80 p-0 focus:text-blue-500-500 focus:font-semibold"
                  href="/"
                >
                  Reviews
                </li>
              </NavLink>
              <NavLink to="contact" className="nav-item p-2">
                <li
                  className="nav-link text-slate-800 opacity-75 hover:opacity-80 focus:opacity-80 p-0 focus:text-blue-500-500 focus:font-semibold"
                  href="/"
                >
                  Contact Us
                </li>
              </NavLink> */}
            </ul>
            {/* Login */}

            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
          {/* Right elements */}
          <div className={`${user ? "block" : "hidden"}`}>
            <div className="flex items-center relative">
              <div className=" dropend relative">
                <a
                  className="dropdown-toggle flex items-center hidden-arrow"
                  href="/"
                  id="dropdownMenuButton2"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={`${user?.photoURL}`}
                    className="rounded-full"
                    style={{ height: 50, width: 50 }}
                    alt="Not found"
                    // loading="lazy"
                  />
                </a>
                <ul
                  className="dropdown-menu w-40 min-w-max absolute hidden bg-slate-200 text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1  m-0 bg-clip-padding border-none  left auto right-0"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <a
                      className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      href="/"
                    >
                      {user?.displayName}
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/dashboard"
                      className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    >
                      Dashboard
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      to="/update"
                      className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    >
                      Update Profile
                    </Link>
                  </li> */}
                  <hr className="h-0 my-2 border border-solid border-t-0 border-gray-700 opacity-25" />
                  <li>
                    <a
                      onClick={logOut}
                      className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      href="/"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`${user ? "hidden" : "block"}`}>
            <NavLink to="login" className="nav-item p-2">
              <li className="nav-link text-slate-800 opacity-75 list-none hover:opacity-80 focus:opacity-80 p-0">
                Login
              </li>
            </NavLink>
          </div>
          {/* Right elements */}
        </div>
      </nav>
    </>
  );
}
