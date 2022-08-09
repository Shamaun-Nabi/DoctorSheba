import React from "react";

export default function Service({ services }) {
  return (
    <>
      <div className="flex justify-center mt-4">
        <div
          className={`p-6 rounded-lg shadow-lg   text-slate-100 max-w-sm gap-4 my-2`}
        >
          <div className="flex justify-center py-4">
            <img src={services.icon} alt="" />
          </div>
          <div>
            <h5 className="text-slate-800 text-xl text-center leading-tight font-medium mb-2">
              {services.title}
            </h5>
            <p className="text-gray-500 text-center  text-base mb-4">{services.des}</p>
          </div>
        </div>
      </div>
    </>
  );
}
