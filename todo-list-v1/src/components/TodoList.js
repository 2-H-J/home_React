// TodoListItem 컴포넌트를 가져옵니다.
// 이 컴포넌트는 개별 todo 항목을 렌더링합니다.
import TodoListItem from "./TodoListItem";

// TodoList 컴포넌트 정의
// 이 컴포넌트는 todo 항목들의 리스트를 테이블 형태로 렌더링합니다.
// todoList: todo 항목 배열, deleteTodo: 삭제 함수, updateTodo: 상태 업데이트 함수
export default function TodoList({ todoList, deleteTodo, updateTodo }) {
    // props를 구조 분해하여 todoList, deleteTodo, updateTodo를 추출

    return (
        <div>
            {/* 테이블로 todo 리스트를 표시 */}
            <table className="table">
                
                <thead>
                    <tr>
                        <th style={{ width: '10%' }}>ID</th> {/* ID 컬럼 */}
                        <th style={{ width: '70%' }}>Todo</th> {/* Todo 내용 컬럼 */}
                        <th style={{ width: '10%' }}>Complete</th> {/* 완료 버튼 컬럼 */}
                        <th style={{ width: '10%' }}>Delete</th> {/* 삭제 버튼 컬럼 */}
                    </tr>
                </thead>

                <tbody>
                    {/* todoList 배열을 순회하며 TodoListItem 컴포넌트 생성 */}
                    {todoList.map((todo) => {
                        return (
                            // 각 항목에 대해 TodoListItem 컴포넌트를 렌더링
                            // key: React에서 리스트를 렌더링할 때 고유 식별자
                            // deleteTodo, updateTodo를 props로 전달하여 하위 컴포넌트에서 동작 가능하게 함
                            <TodoListItem todo={todo} key={todo.id} deleteTodo={deleteTodo} updateTodo={updateTodo} />
                        );
                    })}
                </tbody>
                
            </table>
        </div>
    );
}
