import React from "react";
import { Puff } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Loading() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Puff
        height="80"
        width="80"
        radisu={1}
        color="#444444"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
