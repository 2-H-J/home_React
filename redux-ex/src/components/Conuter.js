import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../store/counterSlice";
import { useRef } from "react";

export default function Counter() {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    const txt = useRef(null);

    return (
      <div>
        <h2>redux 예제</h2>
        <input type="text" ref={txt}/><button onClick={() => dispatch(incrementByAmount(Number(txt.current.value)))}>증가</button>
        <hr/>
        <button onClick={() => dispatch(increment())}>+</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    );
  }