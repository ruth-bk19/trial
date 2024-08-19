import React from "react";
import "./content.css";


const Content = () => {
  const listItems = [
    {
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      image: "assets/images/avatar.png",
      h3:"Name Surname",
      p1:"One time senior care seeker",
    },
    {
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      image: "assets/images/avatarimg.png",
      h3:"Name Surname",
      p1:"Recurring pet care seeker",
    },
    {
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      image: "assets/images/aavatarimg.png",
      h3:"Name Surname",
      p1:"Recurring pet care seeker",
    },
  ];
  const listRendered = listItems.map((value) => (
    <div className="container_content">
      <div className="content">
      <p>{value.p}</p>
      <div className="img-section">
      <img src={value.image} alt="content" />
      <div className="surname">
      <h3>{value.h3}</h3>
      <p>{value.p1}</p>
      </div>
      </div>
    </div>
    </div>
  ));
  return <div>
     {listRendered}
    <div>
      <h1>Find you Care <span>Now</span></h1>
    </div>
    
        
  </div>;
  
};

export default Content;
