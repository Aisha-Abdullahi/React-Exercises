import React, { Component } from 'react'
import Age from './Age'


export default class Welcome extends Component {
  render() {
    return (  
      <div>
      <h1> Welcome {this.props.name}</h1>
      <Age age={12} />
      </div>
    )
  }
}