import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };

  rederTags() {
    if (this.state.tags.length == 0) return <p> There is not tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}> {tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <ul>{this.rederTags()}</ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
