import React from 'react'
import Doctor from "../assets/images/doctor.png";

export default function AppointDoctor() {
  return (
    <>   <div className="bg-appoint-pattern bg-cover">
    <div className="container mx-auto">
      <div className="flex justify-center items-center  ">
        <div className="flex-1 hidden md:block">
          <img className="w-[90%] mt-[-150px] " src={Doctor} alt="" />
        </div>
        <div className="flex-1 text-center p-4">
          <p className="text-md font-bold text-teal-400">Appointment</p>
          <h3 className="text-4xl text-white">
            Make an appointment Today
          </h3>
          <p className="mt-2 text-slate-300">
            It is a long established fact that a reader will be distracted
            by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsumis that it has a more-or-less
            normal distribution of letters,as opposed to using 'Content
            here, content here', making it look like readable English. Many
            desktop publishing packages and web page
          </p>
          <button
            type="button"
            className="inline-block mt-3 px-7 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg transition duration-150 ease-in-out"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  </div></>
  )
}
