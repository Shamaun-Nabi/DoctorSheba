import { format } from "date-fns";
import React from "react";

export default function AvailableService({ selected }) {
  return (
    <>
      <div className="text-center">
        <h3 className=" text-md text-blue-600 font-semibold">
          Available Services On  {format(selected, "PP")}
        </h3>
        <p className="text-slate-600 text-xl">Please Select A Serviece</p>
      </div>
    </>
  );
}
