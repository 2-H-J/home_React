// CSS 파일을 가져옵니다.
// 이 CSS 파일은 'done' 클래스 스타일링을 포함하며 완료된 항목에 스타일을 적용하는 데 사용됩니다.
import './../css/todo.css';

// TodoListItem 컴포넌트 정의
// 이 컴포넌트는 개별 todo 항목을 렌더링하며, 완료 및 삭제 동작을 처리합니다.
function TodoListItem({ todo, deleteTodo, updateTodo }) {
    // todo: 개별 todo 객체 (id, text, done 속성을 포함)
    // deleteTodo: todo를 삭제하는 부모 컴포넌트에서 전달된 함수
    // updateTodo: todo의 완료 상태를 업데이트하는 부모 컴포넌트에서 전달된 함수

    return (
        <tr>
            {/* ID 컬럼: todo의 id를 표시 */}
            <td>{todo.id}</td>

            {/* Todo 내용 컬럼 */}
            <td>
                {/* 완료 여부에 따라 클래스 적용 
                    - 완료된 항목(todo.done === true)일 경우 'done' 클래스 추가
                    - 완료되지 않은 항목은 빈 문자열 클래스
                */}
                <span className={todo.done ? 'done' : ''}>{todo.text}</span>
            </td>

            {/* Complete 버튼 컬럼 */}
            <td>
                <button 
                    className="btn btn-primary" // Bootstrap 클래스 사용
                    onClick={() => { updateTodo(todo.id); }} // updateTodo 호출 (todo의 id 전달)
                >
                    Complete
                </button>
            </td>

            {/* Delete 버튼 컬럼 */}
            <td>
                <button 
                    className="btn btn-danger" // Bootstrap 클래스 사용
                    onClick={() => { deleteTodo(todo.id); }} // deleteTodo 호출 (todo의 id 전달)
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}

// 컴포넌트를 외부에서 사용할 수 있도록 내보냅니다.
export default TodoListItem;
