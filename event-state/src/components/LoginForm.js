import { useState } from "react";

export default () => {
  // useState를 배열 디스트럭처링으로 수정
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  // 아이디 상태 업데이트 함수
  const updateId = (e) => {
    setId(e.target.value);
  };

  // 비밀번호 상태 업데이트 함수
  const updatePassword = (e) => {
    setPassword((current) => {
      console.log('바뀌기 전 값:', current, '바뀐 값:', e.target.value);
      return e.target.value; // 새로운 값
    });
  };

  return (
    <div>
      <h1>LoginForm</h1>
      <form
        method="get"
        onSubmit={(e) => {
          e.preventDefault();
          console.log('아이디:', id, '비밀번호:', password);
        }}
      >
        <input type="text" placeholder="아이디" onChange={updateId} />
        <br />
        <input type="password" placeholder="비밀번호" onChange={updatePassword} />
        <br />
        <input type="submit" value="로그인" />
      </form>
    </div>
  );
};
