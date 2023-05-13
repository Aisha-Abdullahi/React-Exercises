import React, { Component } from "react";
import CounterDisplay from "./CounterDisplay";

export default class Counter extends Component {
  constructor(props) {
     super(props);

     this.state = {
      count: this.props.initialCount,
    };
  }

  //   setInterval(() => {
  //     this.setState({ count: this.state.count + this.props.incrementValue });
  //   }, this.props.interval);
  // }
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
        <CounterDisplay count= {this.state.count}/>
      </div>
    );
  }
}
