import React from "react";
import WorkItem from "./WorkItem";

const Work = () => {
    const data = [
        {
          year: 2022,
          title: "Trainee",
          duration: "1 year",
          details:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
          year: 2021,
          title: "Trainee",
          duration: "1 year",
          details:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
          year: 2020,
          title: "Trainee",
          duration: "1 year",
          details:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
          year: 2019,
          title: "Trainee",
          duration: "1 year",
          details:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
          year: 2018,
          title: "Trainee",
          duration: "1 year",
          details:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
          year: 2017,
          title: "Trainee",
          duration: "1 year",
          details:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
      
      ];
      
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
