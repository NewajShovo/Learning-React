import React, { Component } from "react";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
            <badge className="badge-pill badge-secondary m-2">
              {this.props.totalCounters}
            </badge>
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
