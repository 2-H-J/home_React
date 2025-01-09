import axios from "axios";
export default function Home() {
    // axios 이용해서 전체 회원 데이터 읽어오는 코드 작성
    // 경로는 /member/list, 가지고 오는 것은 Get으로 / 추가, 첨부등등 Post 으로
    const result = useRef(null); 

    const getMember = () => {
        // axios 사용해서 전체 회원 데이터 읽어오기
        
        }
    return (
        <div>
            <h2>Home</h2>
            <button onClick={getMember}>회원 데이터 가져오기</button>
            <div ref={result}></div>

        </div>
    )
}