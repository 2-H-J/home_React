import { Outlet, Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div>
      <h2>소개 페이지</h2>
      <p>이 프로젝트에 대한 간단한 설명을 보여줍니다.</p>
      {/* 중첩된 Route 꺼내주기 하위 Route는 /를 제외 */}
      <ul>
        <li><Link to="team">팀소개</Link></li>
        <li><Link to="company">기업소개</Link></li>
      </ul>
      <hr/>
      {/* 중첩 라우트로 매칭된 하위 컴포넌트가 렌더링될 위치 */}
      <Outlet/>
    </div>
  );
}