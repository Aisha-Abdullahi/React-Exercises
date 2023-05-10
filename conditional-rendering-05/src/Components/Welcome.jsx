import React, { Component } from 'react'
import Age from './Age'


export default class Welcome extends Component {
  render() {
    const {name, age} = this.props
    return (
      <div>
        <h1>Welcome {name}</h1>
        <Age age= {19} />
      </div>
    );
  }
}