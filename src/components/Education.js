import React from "react";
import img from "../resources/img-7.jpg";
const Education = () => {
  return (
    <div className="container-fluid py-5" id="education">
      <div className="container py-5  ">
        <div className="row py-5">
          <div className="col-lg-6">
            <img className="mt-auto" src={img} alt="about" width="100%" />
          </div>
          <div className="col-lg-6 text-left my-5 my-md-0 d-flex align-items-center justify-content-center">
            <div>
              <h2 className="text-center mb-5">Education</h2>
              <div className="my-2">
                <h5>Nation Institute of Technology, Warangle </h5>
                <p>
                  B-Tech ( Metallurgy and Materials engineering)
                  <br />
                  CGPA: 6.92
                </p>
              </div>
              <div className="my-2">
                <h5>Shining Public School, Raisen</h5>
                <p>
                  Class XII, Secondary Study <br />
                  CGPA: 7.52
                </p>
              </div>
              <div className="my-2">
                <h5>Father Agnel School, Bhopal</h5>
                <p>
                  Class X, High School <br />
                  CGPA: 7.5
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
