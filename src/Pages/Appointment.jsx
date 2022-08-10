import React, { useState } from "react";
import AvailableService from "../components/AvailableService";
import DatpickerBanner from "../components/DatpickerBanner";

export default function Appointment() {
  const [selected, setSelected] = useState(new Date());
  return (
    <>
      <DatpickerBanner selected={selected} setSelected={setSelected} />
      <AvailableService selected={selected} />
    </>
  );
}
