import React from "react";
import "./testimonial.css";

const Testimonial = () => {
  const Value = [
    {
      image: "assets/images/image4.png",
      name: "John Poe",
      position: "senior caretaker",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      image: "assets/images/image5.png",
      name: "Ammi ",
      position: "children caretaker",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      image: "/assets/images/image6.png",
      name: "jubin",
      position: "senior caretaker",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      image: "assets/images/image7.png",
      name: "Job",
      position: "senior caretaker ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ];

  return (
    <div class="testimonial">
      <div class="partition1">
        <h1>
          Find your perfect <span>caregiver</span>
        </h1>
        <p>All our caregivers and verified with a through background check</p>
      </div>
      <div class="card">
        {Value.map((val) => (
          <div>
            <img src={val.image} alt="testimonial"/>
            <h6>{val.name}</h6>
            <p>{val.position}</p>
            <p>{val.description}</p>
          </div>
        ))}
      </div>
      <div  class=" buttons_pairs">
        <button class="afj">Apply for jobs </button>
        <button class="fcn">find care now</button>
      </div>
    </div>
  );
};

export default Testimonial;
