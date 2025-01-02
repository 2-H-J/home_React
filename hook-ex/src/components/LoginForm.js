import { useEffect, useState } from 'react';

// 익명 함수 대신 명명된 함수로 작성
const LoginForm = () => {
    // 상태 변수 id와 password를 생성
    // 각각 사용자 ID와 비밀번호 값을 저장합니다.
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    // useEffect를 사용하여 id 또는 password 상태가 변경될 때마다 실행됩니다.
    useEffect(() => {
        // id와 password 상태가 변경될 때 실행되는 코드
        console.log('effect : ', id, '/', password);

        // cleanup 함수: 이전에 등록된 리소스 정리
        // 컴포넌트가 언마운트되거나 id/password가 변경되기 전에 실행
        return () => {
            console.log('cleanup : ', id, '/', password);
        };
    }, [id, password]); // 의존성 배열: id 또는 password가 변경될 때만 effect 실행

    // JSX를 반환하여 UI를 렌더링합니다.
    return (
        <div>
            {/* 컴포넌트 제목 */}
            <h2>useEffect 테스트</h2>

            {/* id를 입력받는 input 필드 */}
            <p>
                <input
                    type="text"
                    placeholder="ID 입력"
                    onChange={(e) => setId(e.target.value)} // 입력값 변경 시 id 상태 업데이트
                />
            </p>

            {/* password를 입력받는 input 필드 */}
            <p>
                <input
                    type="password"
                    placeholder="Password 입력"
                    onChange={(e) => setPassword(e.target.value)} // 입력값 변경 시 password 상태 업데이트
                />
            </p>
        </div>
    );
};

// 명명된 함수로 export
export default LoginForm;
