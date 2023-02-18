import React from "react";
import "./Introduction.css";

function Introduction() {
  return (
    <div>
      <div className="container">
        <div className="d-flex flex-column introduction">
          <div>Hello</div>

          <div>
            I am <span className="name-txt">Dileepa</span>
          </div>

          <div>Full Stack Developer</div>

          <div className="small-description">
            Passionate about building scalable and efficient web applications
            that provide a seamless user experience.
          </div>

          <button className="touch-btn btn btn-lg btn-outline-success col-lg-4 col-sm-12 mt-4 p-3">
            Let's get in touch!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
