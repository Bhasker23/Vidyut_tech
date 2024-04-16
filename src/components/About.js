import React from "react";
import PageDetails from "./PageDetails";
import HomeMedia from "./HomeMedia";

function About() {
  return (
    <div>
      <h1
        style={{
          color: "white",
          backgroundColor: "#130d28",
          marginTop: "0px",
        }}
      >
        Media
      </h1>
      <div className="homeMediadiv" style={{ backgroundColor: "#130d28" }}>
        <HomeMedia
          imgUrl={
            "https://i0.wp.com/nunam.com/wp-content/uploads/2023/07/1.png?w=750&ssl=1"
          }
          text={
            "Renewable energy storage of the future? Battery recycling for India"
          }
        />
        <HomeMedia
          imgUrl={
            "https://i0.wp.com/nunam.com/wp-content/uploads/2023/07/5.png?w=750&ssl=1"
          }
          text={
            "Second-life battery: Green power from used batteries are fabulas"
          }
        />
        <HomeMedia
          imgUrl={
            "https://i0.wp.com/nunam.com/wp-content/uploads/2023/07/3.png?w=750&ssl=1"
          }
          text={
            "Bengaluru Startup Gives Old Batteries New Life, Repurposes Them to Power Lights, Fans"
          }
        />
      </div>
      <PageDetails />
    </div>
  );
}

export default About;
