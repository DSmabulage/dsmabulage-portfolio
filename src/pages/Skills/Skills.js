import React from "react";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan, faGreaterThan } from "@fortawesome/free-solid-svg-icons";

function Skills() {
  return (
    <div className="container pt-5">
      <div className="col-lg-4 col-sm-12">
        <div className="desc-heading pb-5">
          <FontAwesomeIcon icon={faLessThan} className="icon-col" />
          <span className="mx-3">Skills</span>
          <FontAwesomeIcon icon={faGreaterThan} className="icon-col" />
        </div>
      </div>
      <div>
        <button className="btn btn-success m-2">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
            alt=""
          />
          #Nodejs
        </button>
        <button className="btn btn-light m-2">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg"
            alt=""
          />
          #Express
        </button>
        <button className="btn btn-dark m-2">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
            alt=""
          />
          #Javascript
        </button>
        <button className="btn btn-dark m-2">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/csharp-colored.svg"
            alt=""
          />
          #Csharp
        </button>
        <button className="btn btn-dark m-2">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg"
            alt=""
          />
          #MUI
        </button>
        <button className="btn btn-dark m-2">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
            alt=""
          />
          #Bootstrap
        </button>
        <button className="btn btn-dark m-2">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
            alt=""
          />
          #Tailwind
        </button>
        <button className="btn btn-dark m-2">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
            alt=""
          />
          #CSS3
        </button>
        <button className="btn btn-dark m-2">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/jquery-colored.svg"
            alt=""
          />
          #JQuery
        </button>
        <button className="btn btn-dark m-2">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
            alt=""
          />
          #HTML5
        </button>
        <button className="btn btn-dark m-2">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
            alt=""
          />
          #Csharp
        </button>
        <button className="btn btn-dark m-2">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/dot-net-colored.svg"
            alt=""
          />
          #DotNet
        </button>
        <button className="btn btn-dark m-2">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/flutter-colored.svg"
            alt=""
          />
          #Flutter
        </button>
        <button className="btn btn-warning m-2">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg"
            alt=""
          />
          #Firebase
        </button>
        <button className="btn btn-info m-2">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg"
            alt=""
          />
          #Postgres
        </button>
        <button className="btn btn-info m-2">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg"
            alt=""
          />
          #MySql
        </button>
        <button className="btn btn-success m-2">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg"
            alt=""
          />
          #Mongodb
        </button>
        <button className="btn btn-light m-2">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/babel-colored.svg"
            alt=""
          />
          #Babel
        </button>
        <button className="btn btn-info m-2">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg"
            alt=""
          />
          #Redux
        </button>
      </div>
    </div>
  );
}

export default Skills;
