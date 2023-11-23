import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h2 className="pagetitle">Skills</h2>
      <p className="skill_description">
        Learning and success go hand in hand, and the graph is exponential! Once
        you've mastered the basics, tackling advanced concepts is a breeze. No
        trouble, no stress - just pure progress.
      </p>
      <div className="skills_conatiner">
        <div className="skill">
          <span>HTML</span>
          <div className="bg">
            <div className="done html"></div>
          </div>
        </div>
        <div className="skill">
          <span>CSS</span>
          <div className="bg">
            <div className="done css"></div>
          </div>
        </div>
        <div className="skill">
          <span>Tailwind Css</span>
          <div className="bg">
            <div className="done tailwind"></div>
          </div>
        </div>
        <div className="skill">
          <span>JavaScript</span>
          <div className="bg ">
            <div className="done javascript"></div>
          </div>
        </div>
        <div className="skill">
          <span>React.js</span>
          <div className="bg ">
            <div className="done react"></div>
          </div>
        </div>
        <div className="skill">
          <span>Redux</span>
          <div className="bg">
            <div className="done redux"></div>
          </div>
        </div>
        <div className="skill">
          <span>Git</span>
          <div className="bg">
            <div className="done git"></div>
          </div>
        </div>
        <div className="skill">
          <span>Github</span>
          <div className="bg">
            <div className="done github"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
