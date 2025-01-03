/* export default function TodoListItem(props) {
    return (
        <tr>
            <td>1</td>
            <td>내용??</td>
            <td><button class="btn btn-primary">Complete</button></td>
            <td><button class="btn btn-danger">Delete</button></td>
        </tr>
    )
} */
import './../css/todo.css';
function TodoListItem({todo, deleteTodo}) {

    return (
        <tr>
            <td>{todo.id}</td>
            <td ><span className={todo.done ? 'done' : ''}>{todo.text}</span></td>
            <td><button className="btn btn-primary">Complete</button></td>
            <td><button className="btn btn-danger" onClick={() => {deleteTodo(todo.id)}} >Delete</button></td>
        </tr>
    )
}

export default TodoListItem;