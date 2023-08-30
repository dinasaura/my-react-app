import React from 'react';
import AgeExtract from './AgeExtract';

function SecondProp(props) {
    const { name, age } = props;

    const isAgeInRange =   age < 65;
    const isNameJohn = name === "John";
  return (
    <div>
      <p>Welcome, {props.name}!</p>
      {isAgeInRange && isNameJohn && <AgeExtract age={age} />}
      
    </div>
  );
}


SecondProp.defaultProps = {
  name: <strong> Luca </strong>,
  age: null
};

export default SecondProp;

