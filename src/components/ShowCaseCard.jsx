import React from "react";
import { BsClock } from "react-icons/bs";

export default function ShowCaseCard({ cardInfo }) {
  return (
    <>
      <div className="flex justify-center">
        <div
          className={`p-6 rounded-lg shadow-lg ${cardInfo.bg} text-slate-100 max-w-sm flex items-center gap-4 my-2`}
        >
          <span className=" text-5xl md:text-8xl">{cardInfo.icon}</span>
          <div>
            <h5 className="text-slate-100 text-xl leading-tight font-medium mb-2">
              {cardInfo.cardTitle}
            </h5>
            <p className="text-gray-300  text-base mb-4">
             {cardInfo.des}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
