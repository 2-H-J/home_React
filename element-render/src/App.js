import logo from './logo.svg';
import './App.css';
import MyComponent1 from './components/MyComponent1';
import MyComponent2 from './components/MyComponent2';
import ItemList from './components/ItemList';

function App() {
  return (
    <div className="App">
      <MyComponent1 />
      <hr/>
      <MyComponent2 />
      <hr/>
      <ItemList/>
    </div>
  );
}

export default App;
