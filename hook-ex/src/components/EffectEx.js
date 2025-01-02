import { useEffect, useState } from 'react';
export default () => {
    const [today, setToday] = useState(new Date());

    //매번 렌더링 될때마다 실행
    // setTimeout(() => {
    //     setToday(new Date());
    // }, 1000);

    //매번 실행, []가 없기 때문
    // useEffect(() => {
    //     setTimeout(() => {
    //         setToday(new Date());
    //     }, 1000);
    // });

    //[]만 있으면 한번만 실행됨
    // useEffect(() => {
    //     setTimeout(() => {
    //         setToday(new Date());
    //     }, 1000);
    // },[]);

    const [count , setCount] = useState(0);
    const addCount = () => setCount(count + 1);

    //[상태변수,...] 지정한 상태 변수가 변경될때만 새롭게 등록된다
    //count 상태 변수가 바뀌면 today 새롭게 등록
    useEffect(() => {
        setTimeout(() => {
            setToday(new Date());
        }, 1000);
    },[count]);

    return (
        <div>
            <p>현재 시간 : {today.toLocaleTimeString()}</p>
            <p>count : {count}</p>
            <button onClick={addCount}>add</button>
        </div>
    );
}