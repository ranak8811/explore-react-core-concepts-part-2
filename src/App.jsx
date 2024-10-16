import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./Users";

function App() {
  function handleClick(event) {
    alert("button click");
  }

  const add = (n) => {
    n += 10;
    alert("after adding " + n);
  };
  return (
    <>
      <h3>React core concepts part 2</h3>
      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      {/* aita aktu vejal ase */}
      <button onClick={() => add(4)}>Add with param</button>
    </>
  );
}

export default App;
