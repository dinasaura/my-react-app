import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    const { name, age } = this.props;

    return (
      <div>
        <p>Welcome, <strong>{name}</strong>!</p>
        <p>Your age is {age}.</p>
      </div>
    );
  }
}

Welcome.defaultProps = {
    name: <strong> Luca </strong>,
    age: null
};

export default Welcome;