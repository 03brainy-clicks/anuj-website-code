import React from "react";
const ProjectCard = (props) => {
  return (
    <div className=" p-5 col-lg-4 ">
      <div className=" p-5 proj-card">
        <div>
          <img src={props.image} alt="project-1" width="100%" />
        </div>
        <div className="content mt-4">
          <h6>{props.heading}</h6>
          <p>{props.para}</p>
          <span>
            <a href="">
              <b>Read more ...</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
