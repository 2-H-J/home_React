/* 
import React, { useState } from 'react';

export default function CounterReducer() {
    const [count, setCount] = useState(0);

    const addCount = () => setCount(count + 1);
    const minusCount = () => setCount(count - 1);

    return (
        <div>
            <h2>ReducerEx</h2>
            <h3>Count : {count}</h3>
            <button onClick={addCount}>+</button>
            <button onClick={minusCount}>-</button>
        </div>
    );
} 
*/

import React, { useReducer } from 'react';

function reducer(state, action) {
    // state : 저장할 값
    // action : 상태를 변경하는 함수 ( ~일을 할 거다)
    switch (action.type) {
        case 'INCREMENT':
            return {value : state.value + 1};
        case 'DECREMENT':
            return {value : state.value - 1};
    }
}

export default function CounterReducer() {

    const [count, dispatch] = useReducer(reducer,{value : 0}); // Reducer와 상태를 관리하는 함수

    return (
        <div>
            <h2>ReducerEx</h2>
            <h3>Count : {count.value}</h3>
            <button onClick={() => dispatch({type : 'INCREMENT'})}>+</button>
            <button onClick={() => dispatch({type : 'DECREMENT'})}>-</button>
        </div>
    );
}