import {useRef, useState} from 'react';

//useRef
//값을 유지하거나 또는 DOM 요소를 참조
//DOM 참조 => ref 속성값으로 추가해서 해당변수로 참조해서 사용

export default () => {
    const inputRef = useRef(null);
    const btnClick = () => {
        //버튼을 클릭했을때, input 태그에 포커스가 이동하게끔 처리
        // document.querySelector('#ref_txt').focus();
        inputRef.current.focus();
    }

    const [val, setVal] = useState(0);
    const rangeChange = (e) => setVal(range.current.value);
    const range = useRef(null);
    return (
        <>
           <p><input type='text' id="ref_txt" ref={inputRef}/></p>
           <p><input type='range' onChange={rangeChange} ref={range} value={val} /> / {val}</p>
           <p><button onClick={btnClick}>포커스 이동</button></p>
        </>

    );
}