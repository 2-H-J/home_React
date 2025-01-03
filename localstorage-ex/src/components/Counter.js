import { useReducer } from "react";



function Counter() {
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        state = { value: state.value + 1 };
        break;
      case "DECREMENT":
        state = { value: state.value - 1 };
        break;
      default:
        break;
      }
      localStorage.setItem("count", JSON.stringify(state));
      return state;
  };

  const data = localStorage.getItem("count") != null ? JSON.parse(localStorage.getItem("count")) : {value : 0};
  console.log(data);

  const [count, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <>
      <h2>Counter</h2>
      <button onClick={() => dispatch({type : 'INCREMENT'})}>+</button>
      <button onClick={() => dispatch({type : 'DECREMENT'})}>-</button>
      <p>count : {count.value}</p>
    </>
  );
}

export default Counter;