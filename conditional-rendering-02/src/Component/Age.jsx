import React, { Component } from 'react'

export default class Age extends Component {
  render() {
    const { age } = this.props;
    return (
      <div>
      <p>Your age is: {age > 18 ? this.props.age: null}</p>
      </div>
    )
  }
}