import React from "react";
import Project2 from "../resources/projects/project-2.png";
const LandscapeCard = () => {
  const data = {
    code: 2,
    image: Project2,
    heading: "Dynamic inversion on satellite Attitude Dynamics",
    paragraph:
      "Implemented Dynamic inversion Nonlinear control on satellite Attitude Dynamics with Reaction sphere as an Actuator.he reaction sphere can also be employed for momentum-based satellite control. For a given mass, reaction spheres offer greater momentum than other types. Because it uses less inertia and power than reaction wheels and gyroscopes, it is utilized extensively in robotics but can also be employed in satellites. Additionally, since there are no mechanical bearings involved, it increases system reliability. The rotation sphere can also reduce vibrational noise in a satellite and increase the Attitude control system lifespan. An eight-pole rotor and a regular configuration of 20-coils attached to the stator allow levitation and spinning of the rotor by appropriate control of the coil's current",
  };
  return (
    <div className=" p-5 text-align-center ">
      <div className=" p-5 proj-card d">
        <div className="row d-flex align-items-center">
          <div className="col-md-4">
            <img src={data.image} alt="project-1" width="70%" />
          </div>
          <div className="col-md-6">
            <h6>{data.heading}</h6>
            <p>{data.paragraph}</p>
            <span>
              <a href="">

                <b>Read more ...</b>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandscapeCard;
