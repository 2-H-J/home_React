import {useEffect, useState} from 'react';

export default () => {
    const [id , setId] = useState('');
    const [password , setPassword] = useState('');
    
    useEffect(() => {
        // 데이터 불러오기, 이벤트 등록
        console.log('effect : ',id, '/', password);
        return () =>{
            //함수를 통해 이전에 등록한 이벤트나 할당된 리소스 등을 정리하는 부분 -> clenup
            console.log('cleanup : ', id, '/', password);
        }
    },[id, password]);

    return (
        <div>
            <h2>useEffect 테스트</h2>
            <p>
                <input type="text" onChange={(e) => setId(e.target.value)}/>
            </p>
            <p>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
            </p>
        </div>
    );
}