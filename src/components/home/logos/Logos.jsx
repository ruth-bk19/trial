import React from "react";
import "./logos.css";

const Logos = () => {
  const LogoList = [
    {
      image: "assets/images/Relume.svg",
      p: "google",
     
    },
    {
      image: "assets/images/Relume.svg",
      p: "google",
    },
    {
      image: "assets/Relume.svg",
      p: "google",
    },
    {
      image: "assets/images/Relume.svg",
      p: "google",
    },
    {
      image: "assets/images/Relume.svg",
      p: "google",
    },
    {
      image: "assets/images/Relume.svg",
      p: "google",
    },
  ];
  return (
    <div class="logos_container">
      <div class="single-paragraph"> 
      <p>Used by world most trusted companies</p>
      </div>
      <div class='logo-list'>
      {LogoList.map((val) => ((
      <div class="items"> 

      <img src={val.image} alt="logos"/>
      <p>{val.p}</p>
      
      </div>
    
       )))}
    </div>
    </div>
    
  );
};

export default Logos;
