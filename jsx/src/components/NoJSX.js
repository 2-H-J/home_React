
import React from 'react' // React.createElement 사용하기 위해서 선언

// ednf : export default function을 쉽게 만들 수 있다. - export default function first(second) {third}
export default function NoJSX(){
    // Babel 적용 하는 법
    // return React.createElement('h3', null, 'Hello React App');
    // 위와 같이 하거나 아래처럼 함 보통 아래와 같이 작업
    return (
        <div>
            <h3>Hello React App</h3>
        </div>
    )
}

// edf : => 함수로 만든다는 자동완성 명령어 - export default (first) => {second}
