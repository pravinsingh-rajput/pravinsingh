import React from "react";
import "./Certification.css";
import JavaScriptimg from "./Certificate/JavaScript.jpg";
import MasterCSSimg from "./Certificate/MasterCSS.jpg";
import VersonControlimg from "./Certificate/VersonControl.jpg";
import AdvanceReact from "./Certificate/AdvanceReact.jpg";
import Specialization from "./Certificate/SpecializationCertificate.jpg";
import Webdesigncourseimg from "./Certificate/webdesigncourse.jpg";

const Certification = () => {
  const handleclick = (url) => {
    window.open(url);
  };

  return (
    <div className="certification" id="certificate">
      <h2 className="pagetitle">Achievement</h2>
      <div className="certification_container">
        {/* Specialization */}
        <div
          className="certificate"
          onClick={() =>
            handleclick(
              "https://www.coursera.org/account/accomplishments/specialization/certificate/FX9KJ8G2987B"
            )
          }
        >
          <img
            src={Specialization}
            alt="Meta Front-End Developer
"
            className="certificateimg"
            title="View Certificate"
          />
          <p className="coursetitle" title="View Certificate">
            Meta Front-End Developer
          </p>
        </div>
        {/* Advance React */}
        <div
          className="certificate"
          onClick={() =>
            handleclick(
              "https://www.coursera.org/account/accomplishments/certificate/R9N9UK54LFBS"
            )
          }
        >
          <img
            src={AdvanceReact}
            alt="Advance React"
            className="certificateimg"
            title="View Certificate"
          />
          <p className="coursetitle" title="View Certificate">
            Advance React
          </p>
        </div>

        {/* Version Control */}
        <div
          className="certificate"
          onClick={() =>
            handleclick(
              "https://www.coursera.org/account/accomplishments/certificate/7DZNEHSRAD3F"
            )
          }
        >
          <img
            src={VersonControlimg}
            alt="Version Control"
            className="certificateimg"
            title="View Certificate"
          />
          <p className="coursetitle" title="View Certificate">
            Version Control
          </p>
        </div>

        {/* JavaScript  */}
        <div
          className="certificate"
          onClick={() =>
            handleclick(
              "https://www.coursera.org/account/accomplishments/certificate/9EPYJT3XU4FT"
            )
          }
        >
          <img
            src={JavaScriptimg}
            alt="Programming with JavaScript"
            className="certificateimg"
            title="View Certificate"
          />
          <p className="coursetitle" title="View Certificate">
            Programming with JavaScript
          </p>
        </div>

        {/* Master CSS */}
        <div
          className="certificate"
          onClick={() =>
            handleclick(
              "https://drive.google.com/file/d/1IGp_NL0aLjGKKqzBL-IqB5lxVKM-WXr8/view"
            )
          }
        >
          <img
            src={MasterCSSimg}
            alt="CSS Bootcamp: Master CSS (Including CSS Grid & Flexbox)"
            className="certificateimg"
            title="View Certificate"
          />
          <p className="coursetitle" title="View Certificate">
            CSS Bootcamp: Master CSS
          </p>
        </div>

        {/* Web design Course */}
        <div
          className="certificate"
          onClick={() =>
            handleclick(
              "https://drive.google.com/file/d/1MwYUqRO4dsAU6Pdxco5IOZBe7Ic8ncVF/view"
            )
          }
        >
          <img
            src={Webdesigncourseimg}
            alt="HTML CSS and JavaScript for Beginners - A Web Design Course"
            className="certificateimg"
            title="View Certificate"
          />
          <p className="coursetitle" title="View Certificate">
            A Web Design Course
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certification;
