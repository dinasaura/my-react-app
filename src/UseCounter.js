import { useCallback, useState } from "react";

function UseCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = useCallback(() => setCount(prevCount => prevCount + 1), []);
  const handleDecrement = useCallback(() => setCount(prevCount => prevCount - 1), []);
  const handleReset = useCallback(() => setCount(initialValue), [initialValue]);

  return {
    count,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onReset: handleReset
  };
}

export default UseCounter;
