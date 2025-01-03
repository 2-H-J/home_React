import TodoListItem from "./TodoListItem"

// https://getbootstrap.com/ Bootstrap에서 css 확인 가능
export default function TodoList({todoList, deleteTodo}) {
    // const {todoList} = props;

    return(
        <div>
            <table className="table"> 
                <thead>
                    <tr>
                        <th style={{width:'10%'}}>ID</th>
                        <th style={{width:'70%'}}>Todo</th>
                        <th style={{width:'10%'}}>Complete</th>
                        <th style={{width:'10%'}}>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* todoList 아이템을 todoList에 저장된 값을 기준으로 생성 */}
                    {
                        todoList.map((todo) => {
                            return <TodoListItem todo={todo} key={todo.id} deleteTodo={deleteTodo}/>;
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}