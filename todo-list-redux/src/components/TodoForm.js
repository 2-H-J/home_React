import { useRef } from "react";

export default function TodoForm({addTodo}) {
  const txt = useRef(null);
  return (
    <div className="input-group">
      <input type="text" placeholder="할일을 입력하세요" ref={txt} className="form-control"/>
      <button onClick={() => addTodo(txt.current.value)} className="btn btn-primary">Submit</button>
    </div>);
}