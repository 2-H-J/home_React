import { useRef } from 'react';
import './../css/Login.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveInfo } from '../store/MemberSlice';
import { jwtDecode } from 'jwt-decode';
import apiAxios from '../lib/apiAxios';

export default function Login() {
  const id = useRef(null);
  const pwd = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginHandler = () => {
    const data = {
      id : id.current.value,
      passwd : pwd.current.value
    }
    apiAxios.post('/member/login', data)
    .then(res => {
      console.log(res.data);
      //로그인 성공하면 Home으로 이동
      //redux에 로그인 정보 저장
      if(res.data.flag){
        dispatch(saveInfo(res.data));
        const decodeToken = jwtDecode(res.data.token);
        console.log(decodeToken);
        navigate('/');
      }else{
        //실패하면 경고창 출력
        alert('아이디와 비밀번호를 확인하세요');
      }

    }).catch(err => {
      console.log(err);
    });
  }
  return (
    <div className="login-container">
      <h2>로그인</h2>
      <p>이곳은 로그인 페이지입니다.</p>
      <div className="login-form">
        <input type="text" ref={id} placeholder="아이디" />
        <input type="password" ref={pwd} placeholder="비밀번호" />
        <button type="button" onClick={loginHandler}>로그인</button>
      </div>
    </div>

  );
}