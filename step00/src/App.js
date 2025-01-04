import logo from './logo.svg';
import './App.css';
import {sum, minus} from './func/math'; // js는 .js를 안붙이고 파일명만 가져오면 된다
import default_Test from './func/default';

function App() {
  // 값 비교(Primitive Type) === : 절대 비교
  // 값을 직접 비교
  console.log("--------0 비교---------");
  // == : 값을 비교 - true , 값만 같으면 true이다.
  // === : 값과 값의 종류(Data Type)가 모두 같은지를 비교
  console.log(-0 == +0); // -true
  console.log(-0 === +0); // -true

  console.log("--------Object.is 비교---------");
  // Object.is : 객체를 비교
  console.log(Object.is(-0, +0)); // false
  console.log(Object.is(+0, +0)); // true
  
  console.log("--------NaN 비교---------");
  // NaN : Not a Number, 숫자가 아님 - 숫자가 아닐때 체크
  console.log(NaN == NaN); // - false
  console.log(NaN === NaN); //  - false
  console.log(Object.is(NaN, NaN)); // -ture
  // NaN 은 자기자신을 비교했을때 일치하지 않는 유일한 값이다.
  
  console.log("--------null, undefined 비교---------");
  // 변수는 존재하나, 어떠한 값으로도 할당되지 않아 자료형이 정해지지(undefined) 않은 상태
  console.log(null == undefined); // true
  console.log(null === undefined); // false
  console.log(Object.is(undefined,null)); // false

  console.log("----------문자열 비교----------");
  //문자열 비교
  let str1 = 'hello';
  const str2 = 'hello';
  let num1 = 2;
  const num2 = '2';

  console.log(str1 == str2); // true
  console.log(str1 === str2); // true
  console.log(num1 == num2); // true
  console.log(num1 === num2); // false

  console.log(Object.is(str1, str2)); // true
  console.log(Object.is(num1,num2)) // false
  
  console.log("---------객체 비교----------");
  // 객체 비교 - Reference Type
  let obj1 = {name : '홍길동'};
  let obj2 = {name : '홍길동'};

  // 객체는 주소가 달라져서 false
  console.log(obj1 == obj2); // false
  console.log(obj1 === obj2); // false
  console.log(Object.is(obj1,obj2)); // false

  obj2 = obj1; // obj2에 obj1 객체로 적용
  console.log(obj1 == obj2); // true
  console.log(obj1 === obj2); // true
  console.log(Object.is(obj1,obj2)); // true

  console.log("----------improt로 다른 js파일 함수 가져오기---------");
  // import로 js를 가져오려면 위에 import {sum, minus} from './func/math'; 선언했음
  console.log(sum(10,20));
  console.log(minus(10,20));

  console.log("-----improt시 default적용-----");
  default_Test('default_Test : hello world');

  return (
    // className="클래스의 속성값"
    <div className="App">
      <h1>리액트(React) Test</h1>
    </div>
  );
}

export default App;
