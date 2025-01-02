import { useEffect, useState } from 'react';

// 익명 함수 대신, 명명된 함수로 정의
const EffectEx = () => {
    // 현재 시간을 상태로 관리 (today)
    const [today, setToday] = useState(new Date());

    // 카운터를 상태로 관리 (count)
    const [count, setCount] = useState(0);

    // count 상태 변수가 변경될 때마다 실행
    // 현재 시간을 1초 후 새로 설정
    useEffect(() => {
        const timer = setTimeout(() => {
            setToday(new Date());
        }, 1000);

        // useEffect의 cleanup 함수: 컴포넌트가 언마운트되거나 count가 변경되기 전에 실행
        return () => clearTimeout(timer);
    }, [count]); // count가 변경될 때마다 새롭게 등록됨

    // count 증가 함수
    const addCount = () => setCount(count + 1);

    // UI 렌더링
    return (
        <div>
            <p>현재 시간 : {today.toLocaleTimeString()}</p> {/* 현재 시간 출력 */}
            <p>count : {count}</p> {/* 현재 count 값 출력 */}
            <button onClick={addCount}>add</button> {/* 버튼 클릭 시 count 증가 */}
        </div>
    );
};

// 명명된 함수를 default로 내보내기
export default EffectEx;
