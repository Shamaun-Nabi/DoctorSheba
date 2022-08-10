import React, { useState } from "react";
import SideImg from "../assets/images/doctorbanner.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function DatpickerBanner() {
  const [selected, setSelected] = useState(new Date());
  console.log(selected);
  return (
    <>
      <section className="mb-20 background-radial-gradient overflow-hidden  bg-appoint-pattern">
        {/* <style
          dangerouslySetInnerHTML={{
            __html:
              "\n      .background-radial-gradient {\n        background-color: hsl(218, 41%, 15%);\n        background-image: radial-gradient(\n          650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%\n        ),\n        radial-gradient(\n          1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%\n        );\n      }\n      #radius-shape-1 {\n        height: 220px;\n        width: 220px;\n        top: -60px;\n        left: -130px;\n        background: radial-gradient(#44006b, #ad1fff);\n        overflow: hidden;\n      }\n      #radius-shape-2 {\n        border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n        bottom: -60px;\n        right: -110px;\n        width: 300px;\n        height: 300px;\n        background: radial-gradient(#44006b, #ad1fff);\n        overflow: hidden;\n      }\n      .bg-glass {\n        background-color: hsla(0, 0%, 100%, 0.9);\n        backdrop-filter: saturate(200%) blur(25px);\n      }\n    ",
          }}
        /> */}

        <div className="px-6 py-12 lg:py-24 md:px-12 text-center lg:text-left">
          <div className="container mx-auto xl:px-32 b text-gray-800">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="mb-0 md:mb-12 lg:mb-0 relative">
                <div className=" flex justify-center rounded-xl">
                  <DayPicker
                    className="bg-white p-10 rounded-xl shadow-xl"
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                  />
                </div>
              </div>
              <div className="mt-0 md:mt-12 lg:mt-0" style={{ zIndex: 10 }}>
                <img className="rounded-lg" src={SideImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
