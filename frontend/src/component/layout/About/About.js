import { Typography } from "@material-ui/core";
import React from "react";
import "./aboutSection.css";
import Avatar from "../../../images/Avatar.jpg"

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>Computer programs are the most complex things that humans make.</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img src={Avatar} alt="Deepak" className="aboutAvatar" />

          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            Deepak Kumar
          </Typography>

          <Typography>Full Stack web Developer</Typography>

          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
            Programmer
          </Typography>
        </div>

        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >I am Bachelor's Student of Haldia Institute of Technology of 2023 Batch.I am a PROGRAMMER and FULL STACK WEB DEVELOPER.I also have keen interest on CYBER SECURITY.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;