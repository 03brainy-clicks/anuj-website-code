import React from "react";
import img from "../resources/img-1.jpg";

const About = () => {
  return (
    <div className="container-fluid about-me" id="about">
      <div className="row">
        <div className="col-lg-6 about-back">
          <img src={img} alt="" width="100%" />
        </div>
        <div className="col-lg-6 px-5 d-flex align-items-center my-md-0 my-4">
          <div>
            <h2 className="text-center mb-md-5 mb-3">About</h2>
            <p>
              I was born and raised in Bhopal, India. As a child, there was
              something about the sky that always piqued my interest. I would
              often look up for hours, wondering what was beyond all of the
              darkness that covered us. My childhood dream was to become a
              pilot. Then I wanted to become an astronaut, and then I wanted to
              build rockets. So, opting for engineering was never something that
              I second-guessed. I cleared JEE-MAINS(one of the toughest
              engineering entrance exams in India, with a success rate of 2%),
              and I started my undergraduate studies at the National Institute
              of Technology Warangal. My aim is to build a capable and
              affordable rocket with which humans could go to Mars. The projects
              I have done up to now revolve around aerospace control and
              structures. As I keep learning, I wish to explore the fields of
              controls, structures, and machine learning as tools for mission
              design and planning. At the end of the day, I just want to be
              around people who are working hard to send humans to Mars and
              beyond.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
