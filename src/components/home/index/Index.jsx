import React from "react";
import "./index.css";

const Index = () => {
  const columnList = [
    {
      id: 1,
      header: "Initial Screening",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      id: 2,
      header: "Criminal Record check",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      id: 3,
      header: "Vechicle record Check",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      id: 4,
      header: "License Record Check",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ];
  const columnValue = columnList.map((value, index) => (
    <div class="records">
      <button key={index} > {value.id}</button>
      <h3>{value.header}</h3>
      <p>{value.p}</p>
    </div>
  ));
  return <div>{columnValue}</div>;
};

export default Index;
