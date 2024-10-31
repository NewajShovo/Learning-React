import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    tags: [],
  };
  handleIncrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.state.value === 0 ? "zero" : this.state.value;
  }
}

export default Counter;
