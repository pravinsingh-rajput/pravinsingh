import React from "react";

const Projectcontainer = ({
  imgurl,
  projectlink,
  techhologies,
  projectname,
}) => {
  const openproject = (url) => {
    window.open(url);
  };
  return (
    <>
      {/* First */}
      <div className="container" onClick={() => openproject(projectlink)}>
        <img
          src={imgurl}
          alt="projectImg"
          className="posterimg"
          title="View Project"
        />
        <div className="detail_container">
          <p className="postertitle" title="View">
            {projectname}
          </p>
          <div className="technology_used">
            {techhologies.map((item, index) => {
              return (
                <>
                  <span className="tech_used">
                    {item}
                    {techhologies.length - 1 === index ? "" : ","}
                  </span>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projectcontainer;
