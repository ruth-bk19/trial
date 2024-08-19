import React from "react";
import "./container.css";

const Container = () => {
  const ScreenShot = [
    {
      image: "assets/images/Frame 1030.png",
      h3: "Browse caregivers",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
      image: "assets/images/Frame 1030.png",
      h3: "Mention your needs",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: "assets/images/Frame 1030.png",
      h3: "Choose your caregiver",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    
    <div class="Parent">
      <div class="grid-container">
        {ScreenShot.map((item) => {
          return (
            <div class="grid-item">
              <div class="div1">
                <img src={item.image} alt="screenshot"/>
                <h3>{item.h3}</h3>
                <p>{item.p}</p>
              </div>
            </div>
          );
        })}
        <div class="div5">
          <p>What's next?</p>
          <h3>Here’s how you can get started</h3>
          <p>
            Few simple steps and you are on your way to find the care you need
          </p>
          <button class="btn1">join now</button>
          <button class="btn2">Apply for job</button>
          <button class="btn3">contact us</button>
        </div>
      </div>

      <div class="container_2nd">
        <div class="div4">
          <img src="assets/images/Frame 1033.png" alt="container"></img>
        </div>
        <div class="div6">
          <h3>Get our mobile app and stay connected </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>
            <p>Download on the </p>
          </button>
          <button>
            <p>Get it on </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Container;
