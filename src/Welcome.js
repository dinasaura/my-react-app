import React, { Component } from 'react';
import Age from './AgeExtract';

class Welcome extends Component {
  render() {
    const { name, age } = this.props;

    return (
      <div>
        <p>Welcome, <strong>{name}</strong>!</p>
        <Age age={age} /> 
      </div>
    );
  }
}

Welcome.defaultProps = {
  name: <strong>Luca</strong>,
  age: null,
};

export default Welcome;
