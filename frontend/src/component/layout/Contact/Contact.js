import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:dk348176@gmail.com">
        <Button>Contact: dk348176@gmail</Button>
      </a>
    </div>
  );
};

export default Contact;
