import { useCallback, useReducer, useRef, useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const makeTodo = () => {
    const todo = [];
    for (let i = 1; i <= 5; i++) {
        todo.push({ id: i, text: '${i}번째 할일', done: false });
    }
    return todo;
}

function reducer(state, action) {
    switch (action.type) {
        case 'delete':
            return {
                ...state, list: state.list.filter((todo) =>
                    todo.id !== action.payload)
            }
        case 'update':
            return {
                ...state,
                list: state.list.map((todo) =>
                    todo.id === action.payload ?
                        { ...todo, done: !todo.done }
                        : todo
                ),
            };
        case 'insert':
            return {

        ...state,
        id : state.id + 1,
        list: state.list.concat({ id: state.id, text: action.payload, done: false })
    };
}
return state;
}

export default function TodoTemplate() {
    const [todoList, dispatch] = useReducer(reducer, { list: makeTodo(), id: 6 });

const deleteTodo = useCallback((id) => {
    //id 값을 가지고 toList에 있는 값을 제거
    dispatch({ type: 'delete', payload: id });
}, []);

const updateTodo = useCallback((id) => {
    dispatch({ type: 'update', payload: id })
}, []);
const addTodo = useCallback((text) => {
    dispatch({ type: 'insert', payload: text })
}, []);

return (
    <div>
        <h2>Todo List</h2>
        <TodoForm addTodo={addTodo} />
        <TodoList todoList={todoList.list} deleteTodo=
            {deleteTodo} updateTodo={updateTodo} />
    </div>
);
}