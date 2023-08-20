import React from "react";
import video from "../AboutVideo/About Us.mp4";

const About = () => {
  return (
    <div className="Aboutus">
      <video src={video} autoPlay loop muted />
    </div>
  );
};
export default About;
