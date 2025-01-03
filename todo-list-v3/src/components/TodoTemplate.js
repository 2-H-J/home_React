import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useCallback, useEffect, useReducer } from "react";
const makeTodo = () => {
    const todo = [];
    for (let i = 1; i <= 5; i++) {
        todo.push({id: i, text: `${i}번째 할일`, done: false});
    }
    return todo;
}
function reducer(state, action) {
    switch (action.type) {
        case 'DELETE':
            return {...state, list: state.list.filter((todo) => todo.id !== action.payload)};
            
        case 'UPDATE':
            return {...state,list: state.list.map((todo) => {
                if (todo.id === action.payload) {
                    return {...todo, done: !todo.done};
                }
                return todo;
            })};
        case 'ADD':
            return {...state, list: state.list.concat({id: state.id++, text: action.payload, done: false})};
        default:
            return state;
    }
    // return state;
}

function loadTodo() {
    const todo = localStorage.getItem('todo');
    if (todo) {
        return JSON.parse(todo);
    }
    return {list: makeTodo(), id: 6};
}

export default function TodoTemplate() {
    const [todoList, dispatch] = useReducer(reducer, loadTodo());

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todoList));
    }, [todoList]);
    
    const deleteTodo = useCallback((id) => {
        dispatch({type: 'DELETE', payload: id});
    },[]);

    const updateTodo = useCallback((id) => {
        dispatch({type: 'UPDATE', payload: id});
    },[]);

    const addTodo = useCallback((text) => {
        dispatch({type: 'ADD', payload: text});
    },[]);

    return (
        <div>
            <h2>Todo List</h2>
            <TodoForm addTodo={addTodo}/>
            <TodoList todoList={todoList.list} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
        </div>
    );
}