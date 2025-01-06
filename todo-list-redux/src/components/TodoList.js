import TodoListItem from "./TodoListItem";
import { useSelector } from "react-redux";

export default function TodoList() {
    const todo = useSelector(state => state.todo);

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th style={{width: '10%'}}>ID</th>
                        <th>Todo</th>
                        <th style={{width: '10%'}}>Complete</th>
                        <th style={{width: '10%'}}>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todo.todoList.map(todo => {
                            return <TodoListItem key={todo.id} todo={todo}  />
                        })
                    }
                    
                </tbody>
            </table>
        </div>
    );
}