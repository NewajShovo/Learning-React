import React, { Component } from "react";

const NavBar = (props) => {
  return (
    <nav class="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
          <badge className="badge-pill badge-secondary m-2">
            {props.totalCounters}
          </badge>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
