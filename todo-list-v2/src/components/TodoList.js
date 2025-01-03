import TodoListItem from "./TodoListItem";

export default function TodoList({todoList, deleteTodo, updateTodo}) {
    console.log(todoList)
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
                        todoList.map(todo => {
                            return <TodoListItem key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
                        })
                    }
                    
                </tbody>
            </table>
        </div>
    );
}