import React from "react";
import "./cssFile/Home.css";
import { FaArrowRightLong } from "react-icons/fa6";
import HomeMedia from "./HomeMedia";
import PageDetails from "./PageDetails";
import videoBg from "./assests/homeVideo.mp4";

function Home() {
  return (
    <div>
      <div className="overLay">
        <div className="HomeText">
          <p>“Making Sustainable Safe Smart batteries possible.”</p>
        </div>
        <video autoPlay muted playsInline loop>
          <source type="video/mp4" src={videoBg} />
        </video>
      </div>
      {/* <div > */}
      {/* <span className="vidyut-quote">
        Ye <b>VIDYUT</b> ka zamana hai
      </span> */}
      {/* </div> */}
      <div style={{ backgroundColor: "#130d28" }}>
        <h1
          style={{
            color: "white",
            marginTop: "-1px",
            paddingTop: "20px",
            marginBottom: "-15px",
          }}
        >
          Products
        </h1>
        <div className="aboutFirstDiv">
          <div className="ness">
            <img
              alt="NESS"
              src="https://i0.wp.com/nunam.com/wp-content/uploads/elementor/thumbs/image-1-q7oci1gxzkinqmqg0jdbbfpvxrzvdtwukprhxr0qlg.png?w=800&ssl=1"
            ></img>
            <h2>NESS</h2>
            <p className="textInFirstDiv">
              Smart, affordable, sustainable and safe second life battery
              modules
            </p>
            <a href="https://nunam.com/products/">
              <span>Read More</span>
              <FaArrowRightLong />
            </a>
          </div>
          <div className="qmax">
            <img
              alt="Qmaxx"
              src="https://i0.wp.com/nunam.com/wp-content/uploads/elementor/thumbs/Frame-11-q5moe5fi8p80iusi5k4vvg0m3si7a78wixofda2o1e.png?w=800&ssl=1"
            ></img>
            <div>
              <h2>Qmax - Battery Analytics</h2>
              <p className="textInFirstDiv">
                Enabling safer, reliable, bankable and circular batteries with
                battery data
              </p>
              <a href="https://nunam.com/products/">
                <span>Coming Soon</span>
                <FaArrowRightLong />
              </a>
            </div>
          </div>
        </div>
        <h1 style={{ color: "white", marginTop: "-5px" }}>Media</h1>
        <div className="homeMediadiv">
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
      </div>
      <PageDetails />
    </div>
  );
}

export default Home;
