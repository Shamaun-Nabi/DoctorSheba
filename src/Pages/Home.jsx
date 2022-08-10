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
import AppointDoctor from "../components/AppointDoctor";

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
      {/* Appoint Doctor */}
      <AppointDoctor />
    </>
  );
}
