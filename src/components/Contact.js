import React from "react";
import img from "../resources/img-4.jpg";

const Contact = () => {
  return (
    <div className="container py-5 my-5" id="contact">
      <div className="row d-flex align-items-center my-3">
        <div className="col-md-6">
          <div className=" contact-card p-5 m-0">
            <h3 className="text-center color-white">Let's Talk</h3>

            <form name="contact" method="POST" data-netlify="true">
              <div className="mb-3">
                <label htmlFor="Name">Name</label> <br />
                <input type="text" name="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="Name">E-mail</label> <br />
                <input type="email" name="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message">Message</label>
                <textarea cols="30" rows="4" name="message"></textarea>
              </div>
              <div>
                <button className=" btn py-1 my-2 px-5" type="submit">
                  <small>SUBMIT</small>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6 text-center side-image d-md-block d-none">
          <img src={img} alt="" width="85%" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
