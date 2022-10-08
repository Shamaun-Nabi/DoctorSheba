import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";

export default function Users() {
  // const [user, setUser] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/users", {
  //     method: "GET",
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("JWT_TOKEN")}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setUser(data));
  // }, []);

  // Fetch Users with React query
  const {
    isLoading,
    data: user,
  } = useQuery(["Allusers"], () =>
    fetch("http://localhost:5000/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("JWT_TOKEN")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div>
        <h3>Total Users : {user.length} </h3>
        <div>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="bg-white border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Serial No
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Option
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {user.map((user, index) => (
                        <tr
                          key={index}
                          className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {index + 1}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {user.email}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <button
                              type="button"
                              className="inline-block px-6 py-2.5 bg-emerald-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-emerald-800 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                            >
                              Make Admin
                            </button>

                            <br />
                            <br />
                            <button
                              type="button"
                              className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                            >
                              Delete User
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
