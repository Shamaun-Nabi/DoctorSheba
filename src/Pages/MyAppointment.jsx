import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firbase.init";

export default function MyAppointment() {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/bookings?patient=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("JWT_TOKEN")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("JWT_TOKEN");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => setAppointments(data));
    }
  }, [user, navigate]);

  return (
    <>
      <div className="p-4">
        <h3 className="text-3xl text-center">
          {appointments.length} Appointment For {user?.displayName}
        </h3>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="border-b  bg-gray-800 boder-gray-900 ">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-100 px-6 py-4 "
                    >
                      SL.
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-100 px-6 py-4"
                    >
                      Treatment Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-100 px-6 py-4"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-100 px-6 py-4"
                    >
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((app, index) => (
                    <tr
                      key={index}
                      className="border-b bg-blue-100 border-blue-200"
                    >
                      <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {app?.treatmentName}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {app.userEmail}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {app?.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
