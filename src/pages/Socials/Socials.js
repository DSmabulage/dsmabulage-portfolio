import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan, faGreaterThan } from "@fortawesome/free-solid-svg-icons";

function Socials() {
  return (
    <div className="container pt-5">
      <div className="col-lg-4 col-sm-12">
        <div className="desc-heading pb-5">
          <FontAwesomeIcon icon={faLessThan} className="icon-col" />
          <span className="mx-3">Socials</span>
          <FontAwesomeIcon icon={faGreaterThan} className="icon-col" />
        </div>
      </div>
      <div>
        <button className="btn btn-light m-2">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/stackoverflow.svg"
            alt=""
          />
          StackOverflow
        </button>
        <button className="btn btn-light m-2">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg"
            alt=""
          />
          Github
        </button>
        <button className="btn btn-light m-2">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/devdotto.svg"
            alt=""
          />
          Dev.to
        </button>
        <button className="btn btn-light m-2">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/medium.svg"
            alt=""
          />
          Medium
        </button>
      </div>
    </div>
  );
}

export default Socials;
