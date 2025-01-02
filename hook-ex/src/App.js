import logo from './logo.svg';
import './App.css';
import EffectEx from './components/EffectEx';
import LoginForm from './components/LoginForm';
import RefEx from './components/RefEx';
import MemoEx from './components/MemoEx';

// 자동완성이 안뜬다면 export가 안된 경우가 있다.
function App() {
  return (
    <div className="App">
      <EffectEx/>
      <hr/>
      <LoginForm/>
      <hr/>
      <RefEx/>
      <hr/>
      <MemoEx/>
    </div>
  );
}

export default App;
