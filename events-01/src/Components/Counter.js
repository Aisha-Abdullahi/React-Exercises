import React, { Component } from "react";
import CounterDisplay from "./CounterDisplay";
import ClickCounter from "./ClickCounter";

export default class Counter extends Component {
  constructor(props) {
     super(props);

     this.state = {
      count: this.props.initialCount,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + this.props.incrementValue,
      }));
    }, this.props.interval);
}  

componentWillUnmount() {
    clearInterval(this.interval);
}

  render() {
    return (
      <div>
        <ClickCounter />
      </div>
    );
  }
}
