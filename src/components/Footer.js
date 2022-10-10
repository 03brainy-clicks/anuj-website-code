import React from "react";

import linkedin from "../resources/social/linkedin.png";
import instagram from "../resources/social/instagram.png";
import github from "../resources/social/github.png";
import blogger from "../resources/social/blogger.png";

const Footer = () => {
  return (
    <div className="container-fluid footer-up pt-4 mx-0 px-0 mt-5">
      <div className="container-fluid footer mt-3 text-white py-5">
        <div className="container ">
          <div className="col-md-6 mx-auto text-center">
            <h5>Anuj Vivek Kankar</h5>
            <p className="mt-3">
              <span className="mx-2">
                <a href="https://www.linkedin.com/in/anujvk/">
                  <img src={linkedin} alt="linkedin" width={25} />
                </a>
              </span>
              <span className="mx-2">
                <a href="https://instagram.com/anuj_vk__?igshid=YmMyMTA2M2Y=">
                  <img src={instagram} alt="instagram" width={25} />
                </a>
              </span>
              <span className="mx-2">
                <a href="https://github.com/anujvivekkankar">
                  <img src={github} alt="github" width={25} />
                </a>
              </span>
              <span className="mx-2">
                <a href="">
                  <img src={blogger} alt="blogger" width={25} />
                </a>
              </span>
            </p>
            <p>© 2022 Anuj Vivek Kankar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
