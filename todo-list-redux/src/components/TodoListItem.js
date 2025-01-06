import '../css/todo.css';
export default function TodoListItem({ todo, deleteTodo, updateTodo }) {
    return (
        <tr>
            <td>{todo.id}</td>
            <td><span className={todo.done ? 'done' : ''}>{todo.text}</span></td>
            <td><button className="btn btn-primary" onClick={() => updateTodo(todo.id)}>Complete</button></td>
            <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button></td>
        </tr>
    );
}