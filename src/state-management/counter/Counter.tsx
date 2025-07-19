import { useReducer, useState } from "react";
import counterReducer from "./CounterReducer";
import useCounterStore from "./store";
const Counter = () => {
  // const [value, setValue] = useState(0);
  // const [value, dispatch] = useReducer(counterReducer, 0);

  const { counter, increment, reset } = useCounterStore();

  return (
    <div>
      {/* Counter ({value}) */}
      {/* ZUSTAND BELOW */}
      Counter ({counter})
      <button
        // onClick={() => setValue(value + 1)}
        // onClick={() => dispatch({ type: "INCREMENT" })}

        // ZUSTAND BELOW
        onClick={increment}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        // onClick={() => dispatch({ type: "RESET" })}
        // ZUSTAND BELOW
        onClick={reset}
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
