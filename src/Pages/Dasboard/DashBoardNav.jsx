import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";
import { IoChatbubblesOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firbase.init";

export default function DashBoardNav({ sideBar, setSidebar }) {
  const [user, loading, error] = useAuthState(auth);
  const [showDropdown, setDropdown] = useState(false);
  return (
    <>
      <div className="h-20 bg-[#C31162] fixed top-0 left-0 flex items-center w-full pl-8 lg:pl-80 pr-8">
        <div
          onClick={() => setSidebar(!sideBar)}
          className="w-6 block lg:hidden cursor-pointer ml-auto"
        >
          <GiHamburgerMenu className="text-slate-200 text-3xl" />
        </div>
        {/* Search Area */}
        <div className="relative hidden lg:block">
          <BiSearch className="absolute right-3 w-10 top-2 text-slate-700 text-2xl" />
          <input
            placeholder="Search Here"
            type="text"
            className=" rounded-xl block w-72 py-2 focus:outline-none text-left pl-4 bg-[##0000004D]"
          />
        </div>

        <div className="ml-auto items-center space-x-4 hidden lg:flex">
          <IoChatbubblesOutline className="text-2xl text-white cursor-pointer" />
          <MdNotifications className="text-2xl text-white cursor-pointer" />
        </div>

        <div className="relative ml-6 hidden lg:block">
          <div className="" onClick={() => setDropdown(!showDropdown)}>
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-pink-200 bg-cover cursor-pointer"
              src={user?.photoURL}
              alt=""
            />
          </div>
          <div
            className={`${
              showDropdown
                ? "block absolute z-50 mt-2 rounded-md shadow-lg w-48 right-0 py-1 bg-white"
                : "hidden absolute z-50 mt-2 rounded-md shadow-lg w-48 right-0 py-1 bg-white "
            }`}
          >
            <div className="px-4 py-2 text-sm text-gray-400">
              {" "}
              Manage Account
            </div>
            <ul>
              <li className="block cursor-pointer px-4 p-2 leading-5 text-md text-gray-700 hover:bg-gray-100 transition">
                Profile
              </li>
              <li className="block cursor-pointer px-4 p-2 leading-5 text-md text-gray-700 hover:bg-gray-100 transition">
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
