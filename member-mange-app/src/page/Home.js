import axios from 'axios';
import { useEffect, useState } from 'react';
import MemberItem from '../components/MemberItem';
export default function Home() {
    // axios 이용해서 전체 회원 데이터 읽어오는 코드 작성
    // 경로는 /member/list, 가지고 오는 것은 Get으로가지고 오기 / 추가, 첨부등등 Post 으로
    const [memberList, setMemberList] = useState([]);
    // const [memberList, setMemberList] 상태 변수로 그냥 가져오면 무한 호출한다
    // 그래서 useEffect 적용해서 최초의 데이터는 한번만 가져오게 설정
    const refreshMemberList = (list) => {
        setMemberList(list);
    }
    useEffect(() => {
        axios.get('http://localhost:9999/member/list').then(res => {
            setMemberList(res.data);
        }).catch(err => console.log(err));
    }, []);

    console.log(memberList);
    return (
        <div>
            <h2>회원 리스트</h2>
            <table>
                <thead>
                    <tr>
                        <th>아이디</th>
                        <th>이름</th>
                        <th>닉네임</th>
                        <th>회원등급</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        memberList.map(item => <MemberItem id={item.id} username={item.userName} nickname={item.nickName} grade={item.grade} refreshMemberList={refreshMemberList} />)
                    }
                </tbody>
            </table>
        </div>
    );
}