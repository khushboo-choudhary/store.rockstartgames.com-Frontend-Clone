import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div id="header-part">
        <p>Header</p>
      </div>

      <div id="hero-part">
        <div id="left-hero-part">
          <div id="gear-title">
            <p>Gear</p>
          </div>
          <div id="site-title">
            <p>Rockstar Games</p>
          </div>
        </div>
        <div id="right-hero-part">
          <img
            src="https://images.ctfassets.net/wn7ipiv9ue5v/1WUt3MF4RGybjLPS1Q6Seh/f332c9463abc8e3246a72f43851748b5/R-_SectionBanner_V09.jpg?w=1920&h=&fm=webp&q="
            alt="site-img"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
