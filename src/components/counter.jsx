import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //     console.log("Constructor", this);
  //   }

  handleIncrement = () => {
    console.log("Increment Clicked");
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.state.count === 0 ? "zero" : this.state.count;
  }
}

export default Counter;
