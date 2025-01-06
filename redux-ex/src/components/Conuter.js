import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../store/counterSlice";

export default function Counter() {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    

    return (
      <div>
        <h2>redux 예제</h2>
        <input type="text" /><button onClick={() => dispatch(incrementByAmount())}>증가</button>
        <hr/>
        <button onClick={() => dispatch(increment())}>+</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    );
  }