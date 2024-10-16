import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  //   const check = useState(80);
  //   console.log(check);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleReduce = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  return (
    <div style={{ border: "2px solid grey" }}>
      <h3>Counter: {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
};

export default Counter;
