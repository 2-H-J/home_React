// React에서 useCallback과 useState 훅을 가져옵니다.
// useState는 상태 관리를 위해, useCallback은 메모이제이션된 함수를 생성하기 위해 사용됩니다.
import { useCallback, useRef, useState } from "react";

// TodoList 컴포넌트를 가져옵니다.
// TodoList는 todo 항목들을 렌더링하기 위한 하위 컴포넌트입니다.
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

/* 
// 샘플 데이터
todoList = [
    {id : 1, text: '1', done: false},
    {id : 2, text: '2', done: false},
    {id : 3, text: '3', done: false},    
    {id : 4, text: '4', done: false},    
    {id : 5, text: '5', done: false}
];
*/

// 샘플 데이터(todo)를 생성하는 함수
const makeTodo = () => {
    const todo = []; // 빈 배열 생성

    // 1부터 5까지 반복하며 샘플 데이터를 생성
    for (let i = 1; i <= 5; i++) {
        todo.push({
            id: i, // 고유 ID
            text: `${i} 번째 할일`, // 항목의 텍스트 (예: "1 번째 할일")
            done: false // 완료 여부 (초기값은 false)
        });
    }

    return todo; // 샘플 데이터 배열 반환
};

// TodoTemplate 컴포넌트 정의
function TodoTemplate() {
    // todoList 상태 변수 생성
    // 초기값으로 `makeTodo` 함수의 반환값을 설정
    const [todoList, setTodoList] = useState(makeTodo());

    // 할 일을 삭제하는 함수--------------------------------------------------------
    // useCallback을 사용하여 메모이제이션된 함수 생성 (컴포넌트가 리렌더링되어도 동일한 함수 사용)
    const deleteTodo = useCallback((id) => {
        // id 값을 가지고 todoList에서 해당 id를 가진 항목을 제거
        setTodoList((todos) => {
            // filter 메서드를 사용하여 id가 일치하지 않는 항목들만 반환
            return todos.filter((todo) => todo.id !== id);
        });
    }, []); // 의존성 배열이 빈 배열이므로, 이 함수는 처음 렌더링 시에만 생성됩니다.

    // 할 일을 업데이트하는 함수--------------------------------------------------------
    const updateTodo = useCallback((id) => {
        // id를 기준으로 todoList에서 해당 항목의 완료 상태(done)를 반전
        setTodoList((todos) => {
            // map 메서드를 사용하여 id가 일치하는 항목의 done 값을 반전

            // 1번째 방법
            // return todos.map((todo) =>
            //     todo.id === id ? { ...todo, done: !todo.done } : todo
            // );

            // 2번째 방법
            return todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, done: !todo.done };
                }
                return todo;
            });

        });
    }, []); // 의존성 배열이 빈 배열이므로, 이 함수도 처음 렌더링 시에만 생성됩니다.

    // 항목 추가하는 함수--------------------------------------------------------
    let id = useRef(6);
    const addTodo = useCallback((text) => {
        // todoList에 항목 추가
        setTodoList((todos) => {
            // 1번째 방법
            // return [...todos, { id: todos.length + 1, text, done: false }];

            // 2번째 방법 - 이방법으로 할 경우 index.js에서 랜더링이 여러번 되기 때문에 <React.StrictMode></React.StrictMode>를 제거해야 한다.
            return [...todos, {id : id.current++, text, done: false }];
        });
    }, []);

    // 컴포넌트의 UI 렌더링--------------------------------------------------------
    return (
        <div>
            {/* 제목 표시 */}
            <h2>TodoList</h2>
            <TodoForm addTodo={addTodo} />
            {/* TodoList 컴포넌트 렌더링 
                - todoList: 현재 상태의 todo 항목 배열
                - deleteTodo: 항목을 삭제하는 함수
                - updateTodo: 항목의 완료 상태를 반전시키는 함수
            */}
            <TodoList todoList={todoList} deleteTodo={deleteTodo} updateTodo={updateTodo} />
        </div>
    );
}

// 컴포넌트를 외부에서 사용할 수 있도록 내보냅니다.
export default TodoTemplate;
