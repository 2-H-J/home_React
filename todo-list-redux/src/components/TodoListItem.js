import '../css/todo.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../store/TodoSlice';
export default function TodoListItem({ todo }) {
    const dispatch = useDispatch();
    return (
        <tr>
            <td>{todo.id}</td>
            <td><span className={todo.done ? 'done' : ''}>{todo.text}</span></td>
            <td><button class="btn btn-primary" onClick={() => dispatch(updateTodo(todo.id))}>Complete</button></td>
            <td><button class="btn btn-danger" onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button></td>
        </tr>
    );
}