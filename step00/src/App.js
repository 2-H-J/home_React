import logo from './logo.svg';
import './App.css';
import {sum, minus} from './func/math'; // js는 .js를 안붙이고 파일명만 가져오면 된다
import default_Test from './func/default';

function App() {
  // 값 비교(Primitive Type) === : 절대 비교
  console.log(-0 == +0); // ==, === : 주소값으로 비교, 값을 비교 - true
  console.log(-0 === +0);

  console.log("-----------------");

  console.log(Object.is(-0, +0)); // Object : 객체 비교 - false

  console.log("-----------------");
  
  console.log(NaN == NaN); // (NaN : 숫자가 아닐때) - false
  console.log(NaN === NaN); // (NaN : 숫자가 아닐때) - false
  console.log(Object.is(NaN, NaN)); // -ture
  
  console.log("-----문자열 비교-----");
  //문자열 비교
  let str1 = 'hello';
  const str2 = 'hello';
  console.log(str1 == str2);
  console.log(str1 === str2);
  console.log(Object.is(str1, str2));
  
  console.log("-----객체 비교-----");
  // 객체 비교 - Reference Type
  let obj1 = {name : '홍길동'};
  let obj2 = {name : '홍길동'};
  // 객체는 주소가 달라져서 false
  console.log(obj1 == obj2);
  console.log(obj1 === obj2);
  console.log(Object.is(obj1,obj2)); // Object.is : 타입까지 비교

  obj2 = obj1;
  console.log(obj1 == obj2);
  console.log(obj1 === obj2);
  console.log(Object.is(obj1,obj2));

  console.log("-----improt로 다른 js파일 함수 가져오기-----")
  // import로 js를 가져오려면 위에 import {sum, minus} from './func/math'; 선언했음
  console.log(sum(10,20));
  console.log(minus(10,20));

  console.log("-----improt시 default적용-----")
  default_Test('default_Test : hello world');

  return (
    // className="클래스의 속성값"
    <div className="App">
      <h1>리액트(React) Test</h1>
    </div>
  );
}

export default App;
