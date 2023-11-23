import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section id="about_me">
      <div className="aboutcontainer">
        <h2 className="pagetitle">About Me</h2>
        <div className="content">
          <p className="aboutme">
            Hi! My name is Pravin Singh and I’m a frontend developer with 3
            months of internship experience. I have a Bachelor’s degree in
            Computer Science and I’m skilled in technologies such as
            <span className="skilled"> HTML</span>,{" "}
            <span className="skilled"> CSS</span>,{" "}
            <span className="skilled"> Tailwind</span>,{" "}
            <span className="skilled"> JavaScript</span>,{" "}
            <span className="skilled"> ReactJS</span>,{" "}
            <span className="skilled">Redux</span>,{" "}
            <span className="skilled"> Git</span>, and
            <span className="skilled"> GitHub</span>. I enjoy working on the
            frontend, creating user-friendly and visually appealing interfaces.
            With my solid understanding of these technologies, I have developed
            responsive and dynamic web applications.
          </p>
          <p className="aboutme">
            As I continue to grow as a developer, I am actively expanding my
            skill set to become a full stack developer. I am currently learning
            backend technologies to complement my frontend expertise and to gain
            a comprehensive understanding of the entire web development process.
          </p>
          <p className="aboutme">
            In addition to my passion for web development, I have a love for
            travel and adventure. Exploring new places and immersing myself in
            different cultures is something that brings me great joy. I relish
            the opportunity to try new foods and expand my palate. Furthermore,
            I have a keen interest in the world of cryptocurrency and enjoy
            dabbling in trading within the crypto markets.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
