// React의 useCallback과 useRef 훅을 가져옵니다.
// useCallback은 메모이제이션된 콜백 함수를 생성하기 위해, useRef는 DOM 요소를 참조하기 위해 사용됩니다.
import { useCallback, useRef } from "react";

// Callback 컴포넌트 정의
const Callback = () => {
    // useRef 훅으로 특정 DOM 요소를 참조합니다.
    // `area`는 현재 참조된 DOM 요소를 저장합니다.
    const area = useRef(null);

    // useCallback 훅으로 메모이제이션된 함수 생성
    // 이 함수는 의존성 배열(빈 배열)을 기준으로 메모이제이션되어, 컴포넌트가 리렌더링되더라도 동일한 함수가 재사용됩니다.
    const changeColor = useCallback((e) => {
        // input 요소에서 사용자가 선택한 색상 값 출력
        console.log(e.target.value);

        // `area`가 참조하는 div 요소의 배경색을 변경
        area.current.style.backgroundColor = e.target.value;
    }, []); // 의존성 배열이 빈 배열이므로, 이 함수는 컴포넌트가 처음 렌더링될 때 한 번만 생성됩니다.

    // 컴포넌트의 JSX 반환
    return (
        <div>
            <h2>useCallback 테스트</h2>

            {/* 스타일과 크기를 지정한 div 박스, useRef로 참조됩니다. */}
            <div 
                style={{
                    width: '200px', 
                    height: '200px', 
                    border: '1px solid black', 
                    margin: '10px auto'
                }} 
                ref={area} // `area`가 이 div를 참조하게 됩니다.
            ></div>

            {/* 색상 선택 input. 사용자가 색상을 선택하면 `changeColor` 함수가 실행됩니다. */}
            <input type="color" onChange={changeColor} />
        </div>
    );
}

// 컴포넌트를 외부에서 사용할 수 있도록 내보냅니다.
export default Callback;
