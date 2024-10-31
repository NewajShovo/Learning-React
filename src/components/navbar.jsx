import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav class="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
          <badge className="badge-pill badge-secondary m-2">
            {totalCounters}
          </badge>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
