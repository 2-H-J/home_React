import axios from "axios";
function gradeName(grade){
  switch(grade){
    case 0:
      return 'Bronze';
    case 1:
      return 'Silver';
    case 2:
      return 'Gold';
    case 3:
      return 'VIP';
    case 4:
      return 'VVIP';
    case 5:
      return 'Admin';
    default:
      return '-';
  }
}
export default function MemberItem({id, username, nickname, grade, refreshMemberList}) {
  const deleteMember = () => {
    if(window.confirm(id+' 사용자를 삭제하시겠습니까?')){
      axios.delete(`http://localhost:9999/member/delete`,
        {
          data : {id : id}
        }
      ).then(res => {
        console.log(res);
        //list를 최신화
        refreshMemberList(res.data.list);
      });
    }

  };
  return (
    <tr>
      <td>{id}</td>
      <td>{username}</td>
      <td>{nickname}</td>
      <td>{gradeName(grade)}</td>
      <td><button onClick={deleteMember}>삭제</button></td>
    </tr>
  );
}