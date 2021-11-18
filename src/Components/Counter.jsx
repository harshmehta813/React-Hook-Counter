import { useState } from "react";
import Button from "./Button";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const handleClick = (value) => {
    setCounter(counter + value);
  };

  const handleDouble = () => {
    setCounter(counter * 2);
  };
  return (
    <div>
      <h2>Counter</h2>
      <h3>{counter}</h3>
      <Button title="ADD" onClick={() => handleClick(1)} />
      <Button title="REDUCE" onClick={() => handleClick(-1)} />
      <Button title="DOUBLE" onClick={() => handleDouble()} />
    </div>
  );
}
