import React, { Component } from 'react'

export default class Age extends Component {
  render() {
    const { age } = this.props;
    return (
      <div>
      <p>Your age is: {this.props.age}</p>
      </div>
    )
  }
}