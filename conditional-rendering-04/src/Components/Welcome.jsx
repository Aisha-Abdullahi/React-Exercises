import React, { Component } from 'react'
import Age from './Age'


export default class Welcome extends Component {
  render() {
    const name = this.props.name
    const age =64;
    return (
      <div>
        <h1>Welcome {name}</h1>
        {age > 18 && age < 65 && name === "John" && <Age age= {age} />}
      </div>
    );
  }
}