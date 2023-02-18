import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan, faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Blog() {
  const blogs = [
    {
      title: "Card title",
      edited: "Edited on 12/12/2020",
      description: "hjkl;",
      link: "https://google.com",
    },
    {
      title: "Card title",
      edited: "Edited on 12/12/2020",
      description: "hjkl;",
      link: "https://google.com",
    },
  ];
  return (
    <div className="container pt-5">
      <div className="desc-heading pb-5">
        <FontAwesomeIcon icon={faLessThan} className="icon-col" />
        <span className="mx-3">Blog</span>
        <FontAwesomeIcon icon={faGreaterThan} className="icon-col" />
      </div>

      <div className="col-lg-10 col-sm-12">
        {blogs.map((blog, index) => {
          return (
            <div className="card projects mt-3">
              <div className="card-body mt-3" key={index}>
                <h4 className="card-title">{blog.title}</h4>
                <h6 className="mb-2" style={{ color: "#808080" }}>
                  {blog.edited}
                </h6>
                <p className="card-text">{blog.description}</p>
                <div className="row">
                  <Link
                    target="_blank"
                    to={blog.link}
                    style={{
                      color: "RGB(20, 190, 148)",
                      textDecoration: "none",
                    }}
                  >
                    Read More...
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
