import React from 'react';
import Age from './Age';

function Welcome(props) {
  const { name, age } = props;

  const isAgeInRange = age > 18 && age < 65;
  const isNameJohn = name === "John";

  return (
    <div>
      <p>Welcome, {name}!</p>
      {isAgeInRange && isNameJohn && <Age age={age} />}
    </div>
  );
}

Welcome.defaultProps = {
  name: <strong>Guest</strong>,
  age: null
};

export default Welcome;
