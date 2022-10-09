import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../firbase.init";

export default function Modal({ treatment, selected, setTreatment, refetch }) {
  const [user, loading, error] = useAuthState(auth);
  // const { name } = treatment;
  const formateDate = format(selected, "PP");
  const getAppointmentData = (event) => {
    event.preventDefault();
    const slot = event.target.slotName.value;
    const phone = event.target.phn.value;

    const userBooking = {
      treatmentId: treatment?._id,
      treatmentName: treatment?.name,
      phoneNumber: phone,
      date: formateDate,
      slot: slot,
      userEmail: user.email,
      userName: user.displayName,
    };
    // console.log(userBooking);

    fetch("https://obscure-scrubland-35514.herokuapp.com/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userBooking),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          toast.success(`Appointment added On ${formateDate}`);
        } else {
          toast.error("Already added");
          refetch();
          // setTreatment(null);
        }

        // console.log("Success:", data);
      })
      .catch((error) => {
        toast.error(error);
        // console.error("Error:", error);
      });
    // console.log(treatment?.name, "clicked", slot);
    // console.log( name, slots);
  };
  return (
    <>
      <div
        data-bs-backdrop="static"
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalCenter"
        tabIndex={-1}
        aria-labelledby="exampleModalCenterTitle"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-lg outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-teal-500"
                id="exampleModalScrollableLabel"
              >
                {treatment?.name}

                <p
                  className="text-sm font-medium leading-normal text-teal-700"
                  id="exampleModalScrollableLabel"
                >
                  On {format(selected, "PP")}
                </p>
              </h5>

              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body relative p-4">
              <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
                <form onSubmit={getAppointmentData}>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="form-group mb-6">
                      <div className="flex justify-center">
                        <div className="mb-0 w-full">
                          <select
                            name="slotName"
                            className="form-select appearance block w-full px-3 py-1.5 text-base  text-white bg-slate-700 bg-none  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-white focus:bg-slate-800 focus:border-blue-600 focus:outline-none"
                            aria-label="Default select example"
                          >
                            {/* treatment?.slots[0] */}
                            <option defaultValue>{`Select Time`}</option>
                            {treatment?.slots.map((slot, index) => (
                              <option key={index} defaultValue={slot}>
                                {slot}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-6">
                    <input
                      disabled
                      value={user?.displayName}
                      type="text"
                      className="form-control block  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput125"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <input
                      required
                      type="text"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput125"
                      placeholder="Phone Number"
                      name="phn"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <input
                      disabled
                      value={user?.email}
                      type="email"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput126"
                      placeholder="Email Address"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
