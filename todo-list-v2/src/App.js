import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap css 가져오기
import TodoTemplate from './components/TodoTemplate';

function App() {
  return (
    <div className="m-3"> {/* m-3 : margin 3px */}
      <TodoTemplate/>
    </div>
  );
}

export default App;
