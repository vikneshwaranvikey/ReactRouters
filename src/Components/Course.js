import React from "react";
import video from "../AboutVideo/Course.mp4";
const Course = () => {
  return (
    <div className="Aboutus">
      <video src={video} autoPlay loop muted />
    </div>
  );
};
export default Course;
