// 덧셈 뺄셈 함수

// 선언문으로 하면 메모리가 미리 할당되어 순서 상관없이 호출 가능
// export function sum(a, b){
//     return a + b;
// }

// sum------------------------------------- 1번째
function sum(a, b){
    return a + b;
}


// export const minus = (a, b) => a - b; 각 함수 따로 보낼때 변수 앞에 export 입력 하면 다른 js에서 사용 가능


// minus-------------------------------------
// function minus(a, b){
//     return a - b;
// }

 // ---- 2번째 방식
// const minus = function(a, b){
//     return a - b;
// }
const minus = (a, b) => a - b; // 3번째 방식


// 함수를 여러개 받으려면 export{ }안에
// export : 다른곳에서 함수를 사용할 수 있도록 보낼 수 있다.
// 다른 파일에서 import로 받아야 한다 -> import {sum, minus} from './func/math';

export {sum, minus};