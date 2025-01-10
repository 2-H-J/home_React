import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const login = () => {
        navigate('/home');
    };

    return (
        <div>
            <h2>로그인</h2>
            <input type="id" placeholder="아이디"/><br/>
            <input type="password" placeholder="비밀번호"/><br/>
            <button onClick={login}>로그인</button>
        </div>
    );
}
export default Login;