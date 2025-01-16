import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearInfo } from "../store/MemberSlice";
import "./../css/Header.css"
import { jwtDecode } from "jwt-decode";
export default function Header() {
  const user = useSelector((state) => state.member.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    dispatch(clearInfo());
    alert("로그아웃 처리 되었습니다.");
    navigate("/");
  }

  //토큰이 있을때만 처리
  const decodeToken = user.token ? jwtDecode(user.token) : '';
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              { user.token ? <Link to="/">글쓰기</Link> : <></> }
            </li>
            <li>
              {user.token ? <a href="" onClick={logout}>로그아웃</a> : <Link to="/login">로그인</Link> }
            </li>
            <li>
              { user.token ? <Link to="/">마이페이지</Link> : <Link to="/">회원가입</Link>}
            </li>
          </ul>
          {user.token ? <div>{decodeToken.sub}님 로그인하셨습니다.</div> : <></>}
        </nav>
      </header>
    </>
  );
}