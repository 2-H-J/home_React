import { useRef } from "react";

function TodoForm({addTodo}) {
    const txt = useRef(null);

    /* 
    todoForm.js를 만들어서
    하는 일을 입력 받아서 submit 버튼을 클릭해서
    todoList에 입력한 값을 추가

    번호(ID값)는 6부터 시작 

    ID값은 useRef로 관리
    */

    return (
        <div className="input-group">
            <input type="text" placeholder="TodoList 입력" ref={txt} className="form-control"/>
            <button onClick={() => addTodo(txt.current.value)} className ="btn btn-primary">Submit</button>
        </div>
    );

}

export default TodoForm;