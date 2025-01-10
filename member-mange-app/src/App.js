<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
=======

import './App.css';
import Header from './components/Header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './page/Login';
import Home from './page/Home';
import Register from './page/Register';
>>>>>>> 132eb08db621e07217dc726644844e921fbb186e

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
      <Router>
        <Header/>
        <hr/>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/register/view" element={<Register/>}></Route>
        </Routes>
      </Router>
>>>>>>> 132eb08db621e07217dc726644844e921fbb186e
    </div>
  );
}

export default App;
