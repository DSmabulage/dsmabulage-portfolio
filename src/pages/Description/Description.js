import React from "react";
import "./Description.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan, faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.jpg";

function Description() {
  return (
    <div className="container pt-5">
      <div className="desc-heading pb-5">
        <FontAwesomeIcon icon={faLessThan} className="icon-col" />
        <span className="mx-3">MySelf</span>
        <FontAwesomeIcon icon={faGreaterThan} className="icon-col" />
      </div>

      <div className="row">
        <div
          className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center hello-world"
          style={{
            textAlign: "center",
            fontFamily: "JetBrains Mono, monospace",
          }}
        >
          Hello, <br /> World
        </div>
        <div className="col-lg-6 col-sm-12" style={{ textAlign: "center" }}>
          <img
            src={logo}
            alt="logo"
            className="rounded-circle mb-5"
            style={{ maxWidth: "33%", height: "auto" }}
          />
          <div>
            As a full-stack developer, I am passionate about building scalable
            and efficient web applications that provide a seamless user
            experience. With extensive experience in front-end technologies like
            HTML, CSS, JavaScript and React as well as back-end frameworks like
            Node.js and c#, I am equipped to handle projects from end-to-end.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
