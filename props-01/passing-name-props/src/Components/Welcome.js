import React, { Component } from 'react'

export default class welcome extends Component {
  render() {
    return (
      <div>
        <p>welcome {this.props.name}</p>
      </div>
    )
  }
}
