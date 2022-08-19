import React from "react";

export default function ServiceCardAvl({ service, setTreatment }) {
  return (
    <>
      <div className="flex justify-center py-4">
        <div className="block p-10 rounded-lg shadow-lg bg-slate-100 max-w-sm w-96">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2 text-center">
            {service?.name}
          </h5>
          <p className="text-gray-700 text-base mb-4 text-center">
            {service?.slots.length > 0 ? (
              service?.slots[0]
            ) : (
              <span className="text-red-600">Please Try Another Day</span>
            )}
          </p>
          <p className="text-gray-500 text-base mb-4 text-center">
            {service?.slots?.length}
            {service?.slots.length > 1 ? " Spaces" : " Space"} Availvale
          </p>
          <div className="flex justify-center">
            {service?.slots.length > 1 ? (
              <button
                onClick={() => setTreatment(service)}
                data-bs-toggle="modal"
                data-bs-target="#exampleModalCenter"
                data-mdb-ripple-color="light"
                data-mdb-ripple="true"
                type="button"
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Book Appointment
              </button>
            ) : (
              <button
                type="button"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md focus:outline-none focus:ring-0 transition duration-150 ease-in-out pointer-events-none opacity-60"
                disabled
              >
                Appointment Full
              </button>
            )}
          </div>
        </div>
      </div>

    </>
  );
}
