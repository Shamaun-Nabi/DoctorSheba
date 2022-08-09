import React from "react";
import Banner from "../components/Banner";
import ShowCaseCard from "../components/ShowCaseCard";
import { BsClock } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

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
      icon: <BsClock />,
      bg: "bg-blue-600",
    },
  ];
  return (
    <>
      <Banner />

      <div className="container mx-auto">
        <div className="py-10 px-5">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {showCardData.map((card) => (
              <ShowCaseCard key={card.id} cardInfo={card} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
