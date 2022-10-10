import React from "react";
import ProjectCard from "./ProjectCard";
import Project from "../resources/projects/project-1.png";

import Project3 from "../resources/projects/project-3.png";
import Project4 from "../resources/projects/project-4.jpg";
import LandscapeCard from "./LandscapeCard";

const Projects = () => {
  const data = [
    {
      code: 1,
      image: Project,
      heading:
        "Machine learning on non-linear meta materials with anti-curveture",
      paragraph:
        "Generalized the curved beams equation under shear and axial loads for Honeycomb Metamaterial with the Help of the Machine Learning models.The beam is taken as part of Hexagonal metamaterial. Prediction models made like XG boost, Random Forest, etc. The results are validated with the help of ABAQUS",
    },

    {
      code: 3,
      image: Project3,
      heading: "A Robotic Arm with two Degrees of freedom",
      paragraph:
        "The robotic arm consists of a raspberry pi 3b+, camera, servo motors, dc motors, and wheels. Different types of controllers can be used for controlling arms like propotional derivative control. Open CV is used to detect objects with help of a camera and move motors according to the information coming from the camera.",
    },
    {
      code: 4,
      image: Project4,
      heading: "Sliding mode control on Satellite Attitude Dynamics",
      paragraph:
        "Implemented SMC on SAD, SMC provides attractive features such as fast dynamic response, insensitivity to variations in plant parameters, and external disturbance But SM contain chattering,To reduce chattering in SMC, a boundary layer around the switching surface is used, and a continuous control is applied within the boundary",
    },
  ];

  return (
    <div className="container-fluid py-5" id="project">
      <h2 className="text-center py-5">Projects</h2>

      <div className="project-container">
        <LandscapeCard />

        {data.map((project) => {
          return (
            <ProjectCard
              key={project.code}
              image={project.image}
              heading={project.heading}
              para={project.paragraph}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
