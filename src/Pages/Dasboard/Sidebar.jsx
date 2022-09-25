import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiFillHome, AiOutlineCloseCircle } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { HiOutlineInbox } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdNotifications, MdOutlineFavoriteBorder } from "react-icons/md";
import { TiInfoLarge } from "react-icons/ti";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firbase.init";

export default function Sidebar({ sideBar, setSidebar }) {
  const [user, loading, error] = useAuthState(auth);
  return (
    <>
      <div
        className={`fixed left-0 top-0 w-72 h-screen bg-black shadow-md z-10 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-800 scrollbar-thumb-rounded-full
            ${
              sideBar
                ? "flex  transition-all ease-in-out delay-150"
                : "ml-[-400px] lg:ml-0 ease-in-out transition-all delay-150"
            } lg:flex flex-col`}
      >
        {/* flex flex-col justify-between flex-grow */}
        <div className="flex flex-col justify-between flex-grow lg:flex-none ">
          {/* CROSSS */}
          <div
            onClick={() => setSidebar(!sideBar)}
            className="text-white ml-auto mx-1 relative cursor-pointer block lg:hidden"
          >
            <AiOutlineCloseCircle className="text-2xl absolute right-3 top-3" />
          </div>
          <div className="bg-gradient-to-r from-[#C31162] to-[#e0061f9c] rounded-md m-3 p-4 mt-16">
            <div className="flex items-center justify-center space-x-1">
              <AiFillHome className="text-white text-2xl" />
              <Link to="/dashboard" className="text-white text-center text-xl">
                Dashboard
              </Link>
            </div>
          </div>
          <div className="py-4 text-slate-400 ">
            <ul className=" my-3">
              <NavLink
                to="/dashboard/myProfile"
                className={({ isActive }) =>
                  isActive
                    ? "flex  items-center space-x-3 my-3 bg-slate-900 transition cursor-pointer p-2 rounded-md mx-3"
                    : "flex  items-center space-x-3 my-3 hover:bg-slate-900 transition cursor-pointer p-2 rounded-md mx-3"
                }
              >
                <span className="text-2xl">
                  <HiOutlineInbox />
                </span>
                <p className="text-xl font-thin ">Profile</p>
              </NavLink>
              <NavLink
                to="/dashboard/myAppointment"
                className={({ isActive }) =>
                  isActive
                    ? "flex  items-center space-x-3 my-3 bg-slate-900 transition cursor-pointer p-2 rounded-md mx-3"
                    : "flex  items-center space-x-3 my-3 hover:bg-slate-900 transition cursor-pointer p-2 rounded-md mx-3"
                }
              >
                <span className="text-2xl">
                  <MdOutlineFavoriteBorder />
                </span>
                <p className="text-xl font-thin ">My Appointment</p>
              </NavLink>
            </ul>
            {/* All Links */}
            <div className="">
              <hr className="mx-3" />
              <div className="py-3">
                <ul className=" px-8">
                  <li className="hover:bg-slate-900 p-2  transition rounded-md cursor-pointer  text-lg">
                    Add Link1
                  </li>
                  <li className="hover:bg-slate-900 p-2  transition rounded-md cursor-pointer text-lg ">
                    Add Link1
                  </li>
                </ul>
              </div>
              <hr className="mx-3" />
              <ul className=" my-3">
                <li className="flex  items-center space-x-3 my-3 hover:bg-slate-900 transition cursor-pointer p-2 rounded-md mx-3">
                  <span className="text-2xl">
                    <IoSettingsOutline />
                  </span>
                  <p className="text-xl font-thin ">Setting</p>
                </li>
                <li className="flex  items-center space-x-3 my-3 hover:bg-slate-900  transition cursor-pointer p-2 rounded-md mx-3">
                  <span className="text-2xl">
                    <TiInfoLarge />
                  </span>
                  <p className="text-xl font-thin ">Help & FAQ</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:hidden block">
            <div className="relative mx-5 my-5">
              <BiSearch className="absolute right-3 w-10 top-2 text-slate-700 text-2xl" />
              <input
                placeholder="Search Here"
                type="text"
                className=" rounded-xl block  w-full py-2 focus:outline-none text-left pl-4 bg-slate-900 text-white"
              />
            </div>
            <div className="border-t border-gray-300 flex items-center py-4 px-5">
              <div className="cursor-pointer mr-4 flex text-slate-400 items-center space-x-4">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-pink-200 bg-cover cursor-pointer"
                  src={user?.photoURL}
                  alt=""
                />
                <p>{user?.displayName}</p>
                <div className="ml-auto">
                  <MdNotifications className="text-2xl text-white cursor-pointer " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
