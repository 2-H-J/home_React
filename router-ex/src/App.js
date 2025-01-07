import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import NotFoundPage from './page/NotFoundPage';
import PostDetailPage from './page/PostDetailPage';
import TeamPage from './page/TeamPage';
import CompanyPage from './page/CompanyPage';
import SomeComponent from './page/SomeComponent';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <hr/>
      <Routes>
        {/* Route가 경로별로 렌더링할 컴포넌트 지정 */}
        {/* 기본 경로 */}
        <Route path="/" element={<HomePage/>}></Route>

        {/* /about 경로 */}
        <Route path="/about" element={<AboutPage/>}>

        {/* Route안 차원 경로 - 하위 Route는 /를 제외 */}
          <Route path='team' element={<TeamPage/>}></Route>
          <Route path='company' element={<CompanyPage/>}></Route>
          
        </Route>

        {/* 없는 경로, 잘못된 경로로 접근했을 때 */}
        <Route path="*" element={<NotFoundPage/>}></Route>

        {/* 게시글 상세 페이지 지정 - /post/:postId : 내가 보낸 데이터의 파라미터값, postId PostDetailPage의 변수명이랑 같아야 한다 */}
        <Route path="/post/:postId" element={<PostDetailPage/>}></Route>

        {/* 컴포넌트 이동 */}
        <Route path='/some' element={<SomeComponent/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
