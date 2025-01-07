import { Link } from "react-router-dom";
export default function Header() {

  return (
    <nav>
      <ul>
        <li><Link to="/">홈</Link></li>
        <li><Link to="/about">소개</Link></li>
        <li><Link to="/post/1">포스트</Link></li> {/* /post/1에 대한 파라미터 가져오기 */}
        <li><Link to="/some">컴포넌트 이동</Link></li>
      </ul>

    </nav>
  );
}