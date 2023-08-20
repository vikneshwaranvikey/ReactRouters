import React from "react";
import video from "../AboutVideo/ContactUs.mp4";
const Contact = () => {
  return (
    <div className="Aboutus">
      <video src={video} autoPlay loop muted />
    </div>
  );
};
export default Contact;
