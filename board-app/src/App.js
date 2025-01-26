import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './page/Home';
import Login from './page/Login';
import BoardView from './page/BoardView';

function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/board/:bno' element={<BoardView/>}/>
    </Routes>
   </Router>
  );
}

export default App;