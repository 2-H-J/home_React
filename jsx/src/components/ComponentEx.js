import './../css/style.css'; // css 가져오기

export default function ComponentEx() {

    // 버튼이벤트 처리 방법
    const func = () => alert('버튼에 함수 적용하기');
    // document.querySelector('button').onclick = func; // 적용안됨

    // React이벤트 문서 : https://ko.legacy.reactjs.org/docs/handling-events.html
    
    // 배열선언 -> 배열 리스트[반복적인 UI 생성]
    // const items1 = ['item1', 'item2', 'item3'];

    const items2 = [
        {id:1, name:'item1'},
        {id:2, name:'아이템2'},
        {id:3, name:'item5'}
    ];

    // 변수로 css 적용
    const style = {color:'blue', fontSize:'30px', backgroundColor:'green'};


    let flag = true;

    return(
        <div>
            <h2>태그는 반드시 닫는 태그가 있어야 한다. 단일태그도 포함 / ←닫기</h2>
            <input type="text" placeholder="아이디를 입력해 주세요"/>

            {/* ------------------------------------------------------------------------------- */}
            <hr></hr>

            <h2>이벤트 처리 방법</h2>
            <button onClick={func}>1.경고창 띄우기</button><br/>
            <button onClick={() => alert('화살표함수로 경고창 띄우기')}>2.경고창 띄우기</button>

            {/* ------------------------------------------------------------------------------- */}
            <hr></hr>

            <h2>배열 리스트[반복적인 UI 생성]</h2>
            {/* js사용 하려면 {}안에 하면 됨 */}
            <ul>
                {/* {items1.map((item, idx) => <li className='bold' key={idx}>{item}</li>)} */}
                {items2.map((currentValue, index, array) => 
                    <li className='bold' key={index}>
                        id : {currentValue.id} | name : {currentValue.name} | total : {array.length}
                    </li>
                )}
            </ul>
                {/* map : 배열에 있는 내용을 변경해서 새 배열로 만들어준다 */}
                {/* 
                    map() 함수는 콜백 함수에 대한 고유한 이벤트를 전달.
                    currentValue : items 배열의 현재 요소. 예를 들어, 'Item1', 'Item2', 'Item3'등 
                    index : 현재 요소의 인덱스(0부터 시작)
                    array : 전체 배열

                    currentValue, index, array 라고 꼭 명할 필요는 없음
                    currentValue - item
                    index - idx
                    array - arr
                */}

                {/* key : 해당 데이터(item)에 대한 값에 대한 고유값 지정, 중복되는 값 출력하지 않게 검증 */}
                {/* 
                    React는 리스트 렌더링 시 고유한 key 값이 필요, 여기서는 idx(인덱스)를 key로 사용하고 있음
                    key는 React가 각 요소를 구별하고 효율적으로 업데이트하기 위해 사용
                */}

                {/* className : 기존 class랑 동일 css파일 따로 만들어서 .bold로 css적용 */}
                
            {/* ------------------------------------------------------------------------------- */}
            <hr></hr>
            <h2>인라인 스타일 적용 방법</h2>
            <div style={{color:'red', fontSize:'25px', backgroundColor:'yellow'}}> {/* js객체 형태로 css 적용 */}
                JavaScript로 style 적용 방법 {"{}"} 사용
            </div>
            {/* 변수 const style = {color:'blue', fontSize:'30px', backgroundColor:'green'}; 위에 선언 */}
            <div style={style}>
                또는 변수로 선언해서 적용
            </div>

            {/* ------------------------------------------------------------------------------- */}
            <hr></hr>
            {/* let flag = false; 변수 위에 선언 */}
            <h2>조건부 렌더링 - 삼항연산자 적용하여 사용</h2>
            {flag ? <h3>true 입니다.</h3> : <h3>false 입니다.</h3>}
        </div>
    )
}
//JSX 규칙
// 1. 반드시 부모요소 태그 하나로 감싸야 된다.
// 2. JSX 안에서 자바스크립트 표현식을 쓸려면 {}로 묶어야 됨
// 3. {} 내에서는 반복문이랑 if문을 사용하지 않음, 필요시 삼항연산자는 사용 가능
// 4. CSS 적용시에도 카멜 표기법으로 작성해야함 (background-color —> backgroundColor)
// 5. JSX의 속성은 DOM 속성명(javascript 속성)을 따른다 → class 를 className으로 사용
// 6. 반드시 닫는 태그를 써야됨
// 7. 반드시 ‘’ “”로 묶지 않음