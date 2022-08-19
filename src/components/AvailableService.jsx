import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import ServiceCardAvl from "./ServiceCardAvl";

export default function AvailableService({ selected }) {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(treatment);

  return (
    <>
      <div className="text-center">
        <h3 className=" text-md text-blue-600 font-semibold">
          Available Services On {format(selected, "PP")}
        </h3>
        <p className="text-slate-600 text-xl">Please Select A Serviece</p>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service) => (
            <ServiceCardAvl
              key={service._id}
              service={service}
              setTreatment={setTreatment}
            />
          ))}
        </div>
        {/* Modal */}

        <Modal
          setTreatment={setTreatment}
          selected={selected}
          treatment={treatment}
        />
      </div>
    </>
  );
}
