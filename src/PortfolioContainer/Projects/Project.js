import React from "react";
import "./Project.css";
import Projectcontainer from "./projectcontainer";
import PopCornHub from "./projectimg/popcornhub.png";
import NetflixClone from "./projectimg/netflixclone.png";
import ClimateTracker from "./projectimg/climatetracker.png";
import VocalTranscribe from "./projectimg/vocaltranscribe.png";

const Project = () => {
  return (
    <div id="project">
      <h2 className="pagetitle">Projects</h2>
      <div className="project_container certification_container">
        <Projectcontainer
          imgurl={PopCornHub}
          projectname={"PopCornHub"}
          projectlink={"https://popcornhub.vercel.app/"}
          techhologies={["HTML", "CSS", "JavaScript", "React", "API"]}
        />
        <Projectcontainer
          imgurl={NetflixClone}
          projectname={"Netflix Landing Page Clone"}
          projectlink={"https://netflixindia.vercel.app/"}
          techhologies={["HTML", "CSS", "JavaScript", "React"]}
        />
        <Projectcontainer
          imgurl={ClimateTracker}
          projectname={"Climate Tracker"}
          projectlink={"https://climatetracker.vercel.app/"}
          techhologies={["HTML", "CSS", "JavaScript", "React", "API"]}
        />
        {/* <Projectcontainer
          imgurl={VocalTranscribe}
          projectname={"Vocal Transcribe"}
          projectlink={"https://vocaltranscriber.vercel.app/"}
          techhologies={["HTML", "CSS", "JavaScript", "React"]}
        /> */}
      </div>
    </div>
  );
};

export default Project;
