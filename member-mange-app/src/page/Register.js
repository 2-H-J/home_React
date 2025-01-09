import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const id = useRef(null);
  const password = useRef(null);
  const checkPwd = useRef(null);
  const username = useRef(null);
  const nickname = useRef(null);

  const navigate = useNavigate();
  const checkPassword = () => {
    if(password.current.value !== checkPwd.current.value) {
      window.alert('비밀번호가 일치하지 않습니다.');
      return false;
    }
    return true;
  }
  const register = () => {
    //axios 이용해서 회원등록 처리
    /* axios.post('http://localhost:9999/member/register', {
        id : id.current.value,
        passwd : password.current.value,
        name : username.current.value,
        nickname : nickname.current.value
    }).then(res => {
      console.log(res.data);      
    }).catch(err => {
      console.log(err)
    }); */
    axios({
      url : 'http://localhost:9999/member/register',
      method : 'post',
      headers : {
        "Content-Type" : "application/json"
      },
      data : {
        id : id.current.value,
        passwd : password.current.value,
        name : username.current.value,
        nickname : nickname.current.value
      }
    }).then(res => {
      console.log(res.data);
      if(res.data.count != 0) {
        //회원 등록 완료 후 로그인 페이지로 이동
        navigate('/');
      }
    }).catch(err => {
      console.log(err);
    });
  }
  const cancel = () => {
    navigate(-1);
  }
  return (
    <div>
      <h2>회원등록</h2>
      <ul>
        <li><input type="text" ref={id} placeholder="아이디를 입력하세요"/></li>
        <li><input type="password" ref={password} placeholder="비밀번호를 입력하세요"/></li>
        <li><input type="password" ref={checkPwd} placeholder="비밀번호를 다시 입력해주세요"/></li>
        <li><input type="text" ref={username} placeholder="이름 입력해주세요"/></li>
        <li><input type="text" ref={nickname} placeholder="닉네임 입력해주세요"/></li>
        <li><button type="button" onClick={register}>회원가입</button><button onClick={cancel}>취소</button></li>
      </ul>
    </div>
  );
}