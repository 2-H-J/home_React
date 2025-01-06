import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/TodoSlice";

export default function TodoForm() {
  const txt = useRef(null);
  const dispatch = useDispatch();
  return (
    <div className="input-group">
      <input type="text" placeholder="할일을 입력하세요" ref={txt} className="form-control"/>
      <button onClick={() => dispatch(addTodo(txt.current.value))} className="btn btn-primary">Submit</button>
    </div>);
}