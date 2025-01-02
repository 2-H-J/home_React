// React에서 useRef, useState, useMemo 훅을 가져옵니다.
// - useRef: DOM 요소에 접근하거나 값을 유지하기 위해 사용
// - useState: 상태를 관리하기 위해 사용.
// - useMemo: 연산이 비싼 함수의 결과를 캐싱하여 성능을 최적화합니다.
import { useRef, useState, useMemo } from 'react';

// MemoEx라는 React 컴포넌트를 정의합니다.
export default function MemoEx() {

    // list라는 상태를 생성
    // - list는 숫자들의 배열이며, 초기값은 빈 배열([])
    // - setList는 list 상태를 업데이트하는 함수
    const [list, setList] = useState([]);

    // input이라는 useRef 객체를 생성합니다.
    // - input.current를 통해 연결된 DOM 요소를 참조할 수 있습니다.
    const input = useRef(null);

    // addNumber 함수는 입력된 숫자를 list 상태에 추가.
    const addNumber = () => {
        // input.current.value를 통해 input 필드에 입력된 값을 가져옵니다.
        // 값을 숫자로 변환(Number)하여 list에 추가.
        // - 기존의 list 배열을 복사([...list])한 뒤 새로운 값을 추가합니다.
        setList([...list, Number(input.current.value)]);
    };

    // getAverage 함수는 배열의 평균을 계산합니다.
    // - 매개변수 arr은 숫자의 배열입니다.
    const getAverage = (arr) => {
        console.log('평균 계산 중...'); // 평균 계산 중임을 로그로 출력합니다.

        // 배열이 비어 있다면 평균은 0을 반환합니다.
        if (arr.length === 0) return 0;

        // 배열의 모든 숫자를 더한 뒤 요소의 개수로 나누어 평균을 계산합니다.
        return arr.reduce((pre, cur) => pre + cur, 0) / arr.length;
    };

    // getAverageMemo는 useMemo를 사용하여 getAverage 함수의 결과를 캐싱합니다.
    // - list 상태가 변경될 때만 getAverage 함수가 호출됩니다.
    // - 이렇게 하면 불필요한 재계산을 방지하여 성능을 최적화할 수 있습니다.
    const getAverageMemo = useMemo(() => getAverage(list), [list]);

    // temp라는 상태를 생성합니다.
    // - temp는 숫자이며, 초기값은 0입니다.
    // - setTemp는 temp 상태를 업데이트하는 함수입니다.
    // - 이 상태는 평균 계산과는 무관하며, 리렌더링 테스트를 위해 추가되었습니다.
    const [temp, setTemp] = useState(0);

    // JSX를 반환하여 UI를 렌더링합니다.
    return (
        <>
            {/* 컴포넌트의 제목을 표시합니다. */}
            <h2>useMemo 테스트</h2>

            {/* 
            list 배열의 요소들을 문자열로 연결하여 출력합니다.
            getAverageMemo 값을 통해 평균을 표시합니다.
            */}
            <p>{list.join(', ')} / 평균 : {getAverageMemo}</p>

            {/* 숫자를 입력하고 추가할 수 있는 입력 필드와 버튼입니다. */}
            <p>
                {/* 숫자를 입력할 수 있는 <input> 요소입니다. */}
                {/* input ref를 통해 DOM 요소를 연결합니다. */}
                <input type="number" ref={input} />
                {/* 버튼을 클릭하면 addNumber 함수가 호출됩니다. */}
                <button onClick={addNumber}>숫자 추가</button>
            </p>

            {/* 리렌더링을 테스트하기 위한 버튼입니다. */}
            <p>
                {/* 버튼을 클릭하면 temp 상태가 1씩 증가합니다. */}
                {/* temp 상태 변경은 평균 계산에 영향을 주지 않습니다. */}
                <button onClick={() => setTemp(temp + 1)}>테스트</button>
            </p>
        </>
    );
}
