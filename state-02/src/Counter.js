import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.initialCount,
    };

    setInterval(() => {
      this.setState({ count: this.state.count + this.props.incrementValue });
    }, this.props.interval);
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
      </div>
    );
  }
}
