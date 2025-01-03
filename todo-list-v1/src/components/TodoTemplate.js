import { useCallback, useState } from "react";
import TodoList from "./TodoList";

/* 
todoList = [
    {id : 1, text: '1', done: false},
    {id : 2, text: '2', done: false},
    {id : 3, text: '3', done: false},    
    {id : 4, text: '4', done: false},    
    {id : 5, text: '5', done: false}
];
*/

// todoList 샘플데이터 생성
const makeTodo = () => {

    const todo = [];

    for (let i = 1; i <= 5; i++) {
        todo.push({
            id: i,
            text: `${i} 번째 할일`,
            done: false
        });
    }

    return todo
};

function TodoTemplate() {
    const [todoList, setTodoList] = useState(makeTodo()); // todoList 상태변수 생성

    const deleteTodo = useCallback((id) => { // todoList Delete 함수 생성
        // id 값을 가지고 todoList에 있는 값을 제거
        setTodoList((todos) => {
            return todos.filter((todo) => todo.id !== id);// todoList에 대한 filter를 적용 하여 다른거만 가져와준다.
        })
    },[]);

    return (
        <div>
            <h2>TodoList</h2>
            <TodoList todoList={todoList} deleteTodo={deleteTodo}/>
        </div>
    );
}

export default TodoTemplate