import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Hello...</h1>
      <p>Counter {counter}</p>
      <button onClick={() => dispatch(increment(5))}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      {isLogged ? <h3>Secret information.</h3> : <h3>No user is logged in.</h3>}
    </div>
  );
}

export default App;
