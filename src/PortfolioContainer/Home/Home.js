import React from "react";
import "./Home.css";
import { Linkedin } from "react-bootstrap-icons";
import { Twitter } from "react-bootstrap-icons";
import { Github } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";
import Typical from "react-typical";

const Home = () => {
  return (
    <div className="profile_container" id="Home">
      <div className="profile_primary">
        <div className="profile_details_name">
          <p className="profile_name">
            {" "}
            Hello, I'M
            <span>
              <span className="highlight_name">P</span>
              <span className="highlight_name">r</span>
              <span className="highlight_name">a</span>
              <span className="highlight_name">v</span>
              <span className="highlight_name">i</span>
              <span className="highlight_name">n </span>
              <span className="highlight_name">S</span>
              <span className="highlight_name">i</span>
              <span className="highlight_name">n</span>
              <span className="highlight_name">g</span>
              <span className="highlight_name">h</span>
            </span>
          </p>
        </div>
        <div className="profile_details_role">
          <span>
            {" "}
            <h1 className="job_title">
              <Typical
                loop={Infinity}
                steps={[
                  "JavaScript Developer",
                  1500,
                  "FrontEnd Developer",
                  1500,
                  "React Developer",
                  1500,
                ]}
              />
            </h1>
          </span>
        </div>
        <div className="profile_tagline">
          <p>
            Passionate Frontend Developer on a Journey of Code and Adventure,
            Crafting Visually Stunning Interfaces and Exploring the Boundaries
            of Web Development. Transforming Ideas into Responsive and Dynamic
            Experiences. From Lines of Code to Uncharted Lands, I Thrive on
            Innovation and Continuous Learning.
          </p>
        </div>
        <div className="profile_btn">
          {/* <button className="hire_btn">Hire Me</button> */}
          <a href="Pravin's Resume.pdf" download={"Pravin's Resume.pdf"}>
            <button className="resume_btn">Get Resume</button>
          </a>
        </div>
      </div>
      <div className="profile_secondary">
        <div className="profile_img_container">
          <img
            src="./Assests/pravinsingh.png"
            alt="pravinsingh"
            className="profile_img"
          />
        </div>
        <div className="social_media">
          <a
            href="https://www.linkedin.com/in/pravinsinghrajput/"
            target="blank"
          >
            <Linkedin className="icon" />
          </a>
          <a href="https://github.com/pravinsingh-rajput" target="blank">
            <Github className="icon" />
          </a>
          <a href="https://twitter.com/pravinsingh1101" target="blank">
            <Twitter className="icon" />
          </a>
          <a
            href="https://www.instagram.com/pravinsinghrajput_/"
            target="blank"
          >
            <Instagram className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
