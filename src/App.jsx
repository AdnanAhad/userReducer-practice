import "./styles.css";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "SUM":
      let sum = 0;
      for (let i = 0; i <= state.count; i++) {
        sum = sum + i;
      }
      return { ...state, sum, count: sum };
    case "FACT":
      let fact = 1;
      for (let i = 1; i <= state.count; i++) {
        fact = fact * i;
      }
      return { ...state, fact, count: fact };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0, sum: 0, fact: 1 });

  return (
    <div>
      <div>Count: {state.count}</div>
      <div>Sum: {state.sum}</div>
      <div>Factorial: {state.fact} </div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "SUM" })}>SUM</button>
      <button onClick={() => dispatch({ type: "FACT" })}>Factorial</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}
