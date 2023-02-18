import React from "react";
import logo from "../../assets/logo.jpg";

function Navbar() {
  const navList = ["Home", "Features", "Pricing"];
  return (
    <nav class="navbar navbar-expand-sm bg-dark" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src={logo}
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top rounded-circle"
          />
        </a>
        <button
          class="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            {navList.map((item, index) => {
              return (
                <li
                  class="nav-item"
                  key={index}
                  style={{
                    marginRight: index === navList.length - 1 ? "0px" : "40px",
                  }}
                >
                  <a class="nav-link active" aria-current="page" href="#">
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
