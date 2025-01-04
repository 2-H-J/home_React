
import React from 'react' // React.createElement 사용하기 위해서 선언

// ednf : export default function을 쉽게 만들 수 있다. - export default function first(second) {third}

// edf : export default (first) => {second} - 익명함수로 만들기(화살표 함수로 만들기)

// 그 외 단축언어 Snippets(스니펫 - 작은 조각이란 뜻) 모음 - https://github.com/r5n-labs/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md

export default function NoJSX(){
    // Babel 적용 하는 법

    // JSX을 적용 안하고 원래 만드는 방식은 아래와 같이 작성
    // return React.createElement('h3', null, 'Hello React App');

    // 위와 같이 하거나 아래처럼 함 - 보통 아래와 같이 작업

    // JSX을 적용
    return (
        <div>
            <h3>Hello React App</h3>
        </div>
    )
}