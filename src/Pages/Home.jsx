import React from "react";
import Banner from "../components/Banner";
import ShowCaseCard from "../components/ShowCaseCard";
import { BsClock, BsTelephone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import Service from "../components/Service";
import Cavity from "../assets/images/cavity.png";
import Flouride from "../assets/images/fluoride.png";
import Whitening from "../assets/images/whitening.png";
import NewShowCase from "../components/NewShowCase";
import Doctor from "../assets/images/doctor.png";

export default function Home() {
  const showCardData = [
    {
      id: 1,
      cardTitle: "Opening Hours",
      des: "Every Sunday - Wednesday (10.00am - 4.00pm)",
      icon: <BsClock />,
      bg: "bg-blue-600",
    },
    {
      id: 2,
      cardTitle: "Visit our location",
      des: "Brooklyn Road , NY 10036, United States",
      icon: <GoLocation />,
      bg: "bg-slate-800",
    },
    {
      id: 3,
      cardTitle: "Contact us now",
      des: "+000 123 456789 or +8801774327000",
      icon: <BsTelephone />,
      bg: "bg-blue-600",
    },
  ];

  const serviceData = [
    {
      id: 1,
      icon: Flouride,
      title: "Fluoride Treatment",
      des: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 2,
      icon: Cavity,
      title: "Cavity Filling",
      des: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 3,
      icon: Whitening,
      title: "Teeth Whitening",
      des: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <>
      <Banner />

      <div className="container mx-auto">
        {/* ShowCase */}
        <div className="py-8 px-0">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {showCardData.map((card) => (
              <ShowCaseCard key={card.id} cardInfo={card} />
            ))}
          </div>
        </div>

        {/* Service */}

        <div className="py-10 px-5">
          <div className="text-center">
            <h6 className="text-blue-500 font-semibold">OUR SERVICES</h6>
            <h3 className="text-2xl">Service We Provided</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {serviceData.map((service) => (
              <Service key={service.id} services={service} />
            ))}
          </div>
        </div>

        {/* New Showcase */}
        <div className="py-4 px-4">
          <NewShowCase />
        </div>
      </div>
      <div className="bg-appoint-pattern bg-cover">
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
      </div>
    </>
  );
}
