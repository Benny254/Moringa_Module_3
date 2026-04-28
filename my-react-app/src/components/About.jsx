import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about-container">
      <h2>About Me</h2>

      <p>
        I am a passionate learner who enjoys coding and solving problems.
        I love exploring new technologies and constantly improving my skills.
        In my free time, I enjoy creative activities and staying curious
        about the world around me.
      </p>

      <img
        src="/public/images/image.png"
        alt="Spirit Animal"
        className="about-image"
      />
    </div>
  );
}

export default About;
