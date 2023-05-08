import React, { Component } from 'react'

export default class welcome extends Component {
  render() {
    return (
      <div>
        <h1>welcome {this.props.name}</h1>
      </div>
    )
  }
}
