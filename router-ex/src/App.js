import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import NotFoundPage from './page/NotFoundPage';


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
        <Route path="/about" element={<AboutPage/>}></Route>
        {/* 없는 경로, 잘못된 경로로 접근했을 때 */}
        <Route path="*" element={<NotFoundPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
