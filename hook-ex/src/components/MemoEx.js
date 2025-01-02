import {useRef, useState} from 'react';

export default function MemoEx() {
    const [list, setList] = useState([]);
    
    const input = useRef(null);
    const addNumber = () => {
        setList([...list, input.current.value]);
    };

    const getAverage = (arr) => {
        console.log('평균 계산 중...');
        // 평균을 구해서 리턴
        return 
    }
    return (<>
        <h2>useMemo 테스트</h2>
        <p>{list.join(', ')} / 평균 : {} </p>
        <p>
            <input type="number" ref={input}/>
            <button onClick={addNumber}>숫자 추가</button>
        </p>
        <p><button>테스트</button></p>
        </>);
}