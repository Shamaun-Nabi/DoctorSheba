import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loading from "./Loading";
import { VscVerified } from "react-icons/vsc";

export default function Users() {
  // const [user, setUser] = useState([]);
  // useEffect(() => {
  //   fetch("https://obscure-scrubland-35514.herokuapp.com/users", {
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
    refetch,
    isLoading,
    data: user,
  } = useQuery(["Allusers"], () =>
    fetch("https://obscure-scrubland-35514.herokuapp.com/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("JWT_TOKEN")}`,
      },
    }).then((res) => res.json())
  );

  const makeAdmin = (email) => {
    fetch(`https://obscure-scrubland-35514.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("JWT_TOKEN")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(email);
        toast.success("Admin Added");
      });
  };

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
                            <span className="flex items-center">
                              {user.email}
                              {user.role && (
                                <span className="px-2 py-2 text-2xl text-blue-700">
                                  <VscVerified />
                                </span>
                              )}
                            </span>
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {user.role !== "admin" && (
                              <button
                                onClick={() => makeAdmin(user.email)}
                                type="button"
                                className="inline-block px-6 py-2.5 bg-emerald-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-emerald-800 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-500 active:shadow-lg transition duration-150 ease-in-out"
                              >
                                Make Admin
                              </button>
                            )}

                            <br />
                            <br />
                            <button
                              type="button"
                              className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-400 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
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
