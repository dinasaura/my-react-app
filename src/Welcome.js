import React from 'react';
import Age from './Age'

const Welcome = ({ name, age }) => {
  return (
    <div>
      <p>Welcome, {name} !</p>
      {age > 18 && <Age age={age} />} 
    </div>
  );
};

Welcome.defaultProps = {
  name: Luca,
  age: null,
};

export default Welcome;
