import React, { Component } from 'react'

export default class ClickCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
      }
    
      increaseCount = () => {
        this.setState((prevState) => ({
          count: prevState.count + 1
        }));
      }
    
      render() {
        return (
          <div>
            <p>Count: {this.state.count}</p>
            <button onClick={this.increaseCount}>Increase</button>
          </div>
        );
      }
}
