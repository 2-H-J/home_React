import {useState} from "react";
export default function TimeView() {
    // 일반 변수의 값이 바뀌어도 다시 렌더링 되지 않음.
    // 해당값을 상태값으로 지정해야 상태값이 바뀌면 다시 렌더링이 된다. <--상태변수
    // let tiem = new Date().toLocaleTimeString(); //현재 날짜을 시간으로 변환

    // setInterval(() => {
    //     tiem = new Date().toLocaleTimeString();
    //     // console.log(tiem);
    // },1000); // 1초

    // state(상태변수) setTime도 같이 선언해줘야 한다. 
    // [] 대괄호 [time, setTime]
    // setTime : 데이터를 바꾸는 함수 - time을 저장하기 위한 함수
    const [time, setTime] = useState(new Date().toLocaleTimeString()); // useState : 상태변수를 생성하는 함수

    // setInterval(() => {
    //     setTime(new Date().toLocaleTimeString());
    //     // console.log(tiem);
    // }, 1000); // 1초

    // Timeout도 가능
    setTimeout(() => {
        setTime(new Date().toLocaleTimeString());
    },1000);

    return (
        <>
            <h1>TimeView</h1>
            <p>{time}</p>
        </>
    )
}