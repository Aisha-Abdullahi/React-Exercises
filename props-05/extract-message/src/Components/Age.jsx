import React, { Component } from 'react'

export default class Age extends Component {
  render() {
    return (
      <div>
      <p>Your age is: {this.props.age}</p>
      </div>
    )
  }
}

