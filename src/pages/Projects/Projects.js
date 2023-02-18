import React from "react";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLessThan,
  faGreaterThan,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    {
      title: "Card title",
      description:
        "Some quick example text to build on the card title and make up    the bulk of the card's content.",
      technologies: "NodeJs, React, MongoDb",
      link: "https://google.com",
    },
    {
      title: "Card title",
      description:
        "Some quick example text to build on the card title and make up    the bulk of the card's content.",
      technologies: "NodeJs, React, MongoDb",
      link: "https://google.com",
    },
    {
      title: "Card title",
      description:
        "Some quick example text to build on the card title and make up    the bulk of the card's content.",
      technologies: "NodeJs, React, MongoDb",
      link: "https://google.com",
    },
    {
      title: "Card title",
      description:
        "Some quick example text to build on the card title and make up    the bulk of the card's content.",
      technologies: "NodeJs, React, MongoDb",
      link: "https://google.com",
    },
  ];
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <div className="desc-heading pb-5">
            <FontAwesomeIcon icon={faLessThan} className="icon-col" />
            <span className="mx-3">Projects</span>
            <FontAwesomeIcon icon={faGreaterThan} className="icon-col" />
          </div>
        </div>
        <div className="col-lg-8 col-sm-12">
          {projects.map((project, index) => {
            return (
              <div className="card projects mt-5" key={index}>
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="row">
                    <div className="col-6">
                      <strong>{project.technologies}</strong>
                    </div>
                    <div className="col-6 text-end">
                      <Link target="_blank" to={project.link}>
                        <FontAwesomeIcon
                          icon={faUpRightFromSquare}
                          style={{
                            color: "white",
                          }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
