import React from 'react';
import { useNavigate } from "react-router-dom";
import  useCounter  from './UseCounter';

 function Counter({initialValue=0}) {
  const {count, onIncrement, onDecrement, onReset} = useCounter(initialValue)
  const navigate = useNavigate()

  function buttonNavigate() {
      navigate('/')
  }


  return (
      <div>
          <h1>Count: {count}</h1>
          <button onClick={onIncrement}>Increment</button>
          <button onClick={onDecrement}>Decrement</button>
          <button onClick={onReset}>Reset</button>
          <button onClick={buttonNavigate}>Homepage</button>
      </div>
  )
}

export default Counter;

