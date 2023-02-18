import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="container pt-5 pb-5">
      <div className="row">
        <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
          <div style={{ fontSize: "50px", fontWeight: "bold" }}>
            Contact
            <span style={{ color: "RGB(20, 190, 148)" }}> ME!</span>
            <div className="icon-set d-flex justify-content-center">
              <Link to="https://www.linkedin.com">
                <i class="fa-solid fa-envelope fa-fw"></i>
              </Link>
              <Link to="https://www.linkedin.com">
                <i class="fa-brands fa-github fa-fw"></i>
              </Link>
              <Link to="https://www.linkedin.com">
                <i class="fa-brands fa-linkedin fa-fw"></i>
              </Link>
              <Link to="https://www.linkedin.com">
                <i class="fa-brands fa-whatsapp fa-fw"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-sm-12">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Name
            </label>
            <input type="text" class="form-control" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email
            </label>
            <input type="email" class="form-control" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Message
            </label>
            <textarea class="form-control" rows="8"></textarea>
          </div>
          <div class="mb-3">
            <button
              className="btn btn-lg btn-outline-success col-12"
              style={{ fontWeight: "bold" }}
            >
              Let's get in touch!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
