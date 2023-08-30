import React from 'react';
import AgeExtract from './AgeExtract';

function Welcome(props) {

  return (
    <div>
      <p>Welcome, {props.name}!</p>
        {props.age && <AgeExtract age={props.age} />}  
    </div>
  );
}


SecondProp.defaultProps = {
  name: <strong> Luca </strong>,
  age: null
};

export default Welcome;