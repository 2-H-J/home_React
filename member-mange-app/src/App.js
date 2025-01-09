import './App.css';
import Header from './components/Header';
import Login from './page/Login';
import Home from './page/Home';

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
          <Header/>
          <hr/>
          <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
          </Routes>
          

      </Router>
    </div>
  );
}

export default App;
