import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import image from "../resources/img-1.jpg";
// typed js
// import Typed from "typed.js";

// var typed = new Typed(".auto-typed", );

const HeroSection = () => {
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Student Researcher",
        "Space Enthuisast",
        "NITian",
        "Future Engineer",
      ],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);
  return (
    <div className="container hero-section bg my-5 py-5" id="home">
      <div className="row hero d-flex align-items-center justify-content-center my-5">
        <div className="col-md-6">
          <span className="color-grey ">HELLO</span>
          <p className="hero-text">
            I'm <b className="color-blue">Anuj Vivek Kankar</b> <br /> a&nbsp;
            <b>
              <span className="auto-typed color-blue" ref={el}>
                Student
              </span>
            </b>
          </p>
          <p>
            A pre-final year undergraduate student from the Department of
            Metallurgy and Materials, NIT Warangal, India. In my undergraduate
            level, I've developed a passion for Aerospace control and structures
            and am extremely interested in pursuing research in this field as an
            undergraduate.
          </p>
          <a className="nav-link" href="..\resources\resume.pdf" download>
            <button className="resume-button btn py-1 my-2 px-5">
              <small>RESUME</small>
            </button>
          </a>
        </div>
        <div className="col-md-6 d-none d-md-block">
          <div className="hero-image p-5 text-center">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
