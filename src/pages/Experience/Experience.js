import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan, faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import "./Experience.css";

function Experience() {
  const workExperience = [
    {
      date: "jul 2020 - jul 2021",
      title: "Student",
      company: "Educational Environment",
      description: "About Highlands Landscaping",
    },
    {
      date: "jul 2020 - jul 2021",
      title: "Student",
      company: "Educational Environment",
      description: "About Highlands Landscaping",
    },
    {
      date: "jul 2020 - jul 2021",
      title: "Student",
      company: "Educational Environment",
      description: "About Highlands Landscaping",
    },
  ];
  return (
    <div className="container pt-5">
      <div className="col-12">
        <div className="desc-heading">
          <FontAwesomeIcon icon={faLessThan} className="icon-col" />
          <span className="mx-3">Work experience</span>
          <FontAwesomeIcon icon={faGreaterThan} className="icon-col" />
        </div>
      </div>
      <div>
        {workExperience.map((experience, index) => {
          return (
            <div className="row pt-5" key={index}>
              <div className="col-3 pt-3">{experience.date}</div>
              <div className="col-9">
                <div>{experience.title}</div>
                <div
                  style={{ color: "RGB(155, 91, 251)", fontSize: "30px" }}
                  className="pb-3"
                >
                  {experience.company}
                </div>
                <div className="verticalLine">{experience.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
