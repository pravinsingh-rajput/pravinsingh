import React from "react";
import "./Footer.css";
import { Linkedin } from "react-bootstrap-icons";
import { ArrowUp } from "react-bootstrap-icons";
import { EnvelopeFill } from "react-bootstrap-icons";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const topscroll = () => {
    window.scroll(0, 0);
  };

  return (
    <div className="footer">
      <div className="footer_icon">
        <a
          className="footer_link"
          href="https://www.linkedin.com/in/pravinsinghrajput/"
          target="blank"
        >
          <Linkedin className="icon" />
          <span className="profilename">pravinsinghrajput</span>
        </a>
        <a
          className="footer_link"
          href="mailto:singhpravin17a2@gmail.com"
          target="blank"
        >
          <EnvelopeFill className="icon" />
          <span className="profilename">singhpravin17a2@gmail.com</span>
        </a>
      </div>
      <div className="float" onClick={() => topscroll()}>
        <ArrowUp />
      </div>
      <p className="copyright"> © {year} Pravin Singh. All rights reserved.</p>
    </div>
  );
};

export default Footer;
