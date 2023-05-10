import React, { Component } from 'react'

export default class Age extends Component {
  render() {
    const age = this.props.age;
    return (
      <div>
        {age > 18 ? (
          <p>Your age is {age}</p>
        ) : (
          <p>You are very young!</p>
        )}
      </div>
    )
  }
}