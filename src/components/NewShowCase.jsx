import React from "react";
import Treatment from "../assets/images/treatment.png"

export default function NewShowCase() {
  return (
    <>
      <section className="">
        <div className="px-3 py-4 md:py-12 lg:my-0 md:px-12 text-gray-800 text-center lg:text-left">
          <div className="container mx-auto xl:px-32">
            <div className="grid lg:grid-cols-2 items-center">
              <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                <div
                  className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                  style={{
                    background: "hsla(0, 0%, 100%, 0.55)",
                    backdropFilter: "blur(30px)",
                  }}
                >
                  <h1 className="text-3xl md:text-5xl xl:text-4xl font-bold tracking-tight mb-12">
                    Find Your Doctor <br />
                    <span className="text-blue-600">Very Soon..</span>
                  </h1>
                  <a
                    className="inline-block px-7 py-3 mb-2 md:mb-0 md:mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    href="/"
                    role="button"
                  >
                      Play Store
                  
                  </a>
                  <a
                    className="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    href="#!"
                    role="button"
                  >
                    Get The App
                  </a>
                </div>
              </div>
              <div className="md:mb-12 lg:mb-0">
                <img
                  src={Treatment}
                  className="w-full rounded-lg shadow-lg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
