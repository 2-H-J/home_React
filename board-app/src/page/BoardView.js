import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import '../css/main.css';
import '../css/BoardViewPage.css';
import { jwtDecode } from "jwt-decode";
import apiAxios from "../lib/apiAxios";

export default function BoardView() {
  const [data, setData] = useState({});
  const [commentList, setCommentList] = useState([]);
  const [board, setBoard] = useState({});
  const [file, setFileList] = useState([]);
  const user = useSelector(state => state.member.value);
  const bno = useParams().bno;
  const commentContent = useRef('');
  const commentCount = useRef(1);
  const navigator = useNavigate();
  // axios로 게시글 데이터를 요청해서 받음
  useEffect(() => {
    apiAxios.get(`/board/${bno}`)
    .then(res => {
      console.log(res.data);
      setData(res.data);
      setBoard(res.data.board);
      setFileList(res.data.fileList);
      setCommentList(res.data.commentList);
      commentCount.current += res.data.commentList.length;
    })
    .catch(err => console.log(err));
  },[]);
  const decodeToken = user.token ? jwtDecode(user.token) : '';

  //댓글 더보기 ------------------------------------------------------------------------------------------------
  const moreComment = () => {
    apiAxios.get(`/board/comment/${bno}`,
    {
      params : { start : commentCount.current }
    }).then(res => {
      console.log(res.data);
      commentCount.current += res.data.length;
      setCommentList([...commentList, ...res.data]);
    }).catch(err => console.log(err));
  }

  //게시글 좋아요 처리 --------------------------------------------------------------------------------------------------
  const boardLike = () => {
    apiAxios.get(`/board/like/${bno}`,{
      headers : {
        "Authorization" : `Bearer ${user.token}`
      }
    })
    .then(res => {
      alert(res.data.msg);
      //좋아요 개수 최신화
      setBoard({...board, blike : res.data.count});

    }).catch(err => console.log(err));

  }
  //게시글 싫어요 처리 --------------------------------------------------------------------------------------------------
  const boardHate = () => {
    apiAxios.get(`/board/hate/${bno}`,{
      headers : {
        "Authorization" : `Bearer ${user.token}`
      }
    })
    .then(res => {
      alert(res.data.msg);
      //좋아요 개수 최신화
      setBoard({...board, bhate : res.data.count});

    }).catch(err => console.log(err));

  }

  //댓글 좋아요/싫어요 -------------------------------------------------------------------------------------------------
  const commentLikeHate = (e, cno) => {
    console.log(e.target.className);
    apiAxios.get(`/board/comment/${e.target.className == 'btn_comment_like' ? 'like' : 'hate'}/${cno}`,{
      headers : {
        "Authorization" : `Bearer ${user.token}`
      }
    })
    .then(res => {
      alert(res.data.msg);
      e.target.querySelector('span').innerHTML = res.data.count;
    }).catch(err => console.log(err));
  }


  // 댓글 작성 --------------------------------------------------------------------------------------------------
  const commentWrite = () => {
    const data = {
      content : commentContent.current.value,
      bno : bno
    }
    apiAxios.post('/board/comment', data, {
      headers : {
        "Authorization" : `Bearer ${user.token}`
      }
    })
    .then(res => {
      console.log(res.data);
      // alert(res.data.msg);
      setCommentList(res.data.commentList);
      commentContent.current.value = '';
    }).catch(err => console.log(err));
  }

  //게시글 삭제 --------------------------------------------------------------------------------------------------
  const deleteBoard = () => {
    apiAxios.delete(`/board/${bno}`,{
      headers : {
        "Authorization" : `Bearer ${user.token}`
      }
    })
    .then(res => {
      alert(res.data.msg);
      if(res.data.code == 1){
        navigator('/');
      }
    }).catch(err => console.log(err));
  }
  

  // 댓글 수정 누를시 style 변경 ----------------------------------------------------------------------------------
  const onUpdateCommentForm = useCallback((e) => {
    e.target.parentElement.parentElement.querySelector('.comment_form').style.display = 'block';
    e.target.parentElement.parentElement.querySelector('.comment_content').style.display = 'none';
  });
  const offUpdateCommentForm = useCallback((e) => {
    e.target.parentElement.parentElement.querySelector('.comment_form').style.display = 'none';
    e.target.parentElement.parentElement.querySelector('.comment_content').style.display = 'block';
  });

  // 댓글 수정 ------------------------------------------------------------------------------------------------------
  const commentUpdate = (cno, content,e) => {
    console.log(cno, content);
    const data = {
      cno : cno,
      content : content
    }
    apiAxios.put('/board/comment', data, {
      headers : {
        "Authorization" : `Bearer ${user.token}`
      }
    })
    .then(res => {
      console.log(res.data);
      setCommentList([...res.data.commentList]);
      commentCount.current = res.data.commentList.length+1;
      offUpdateCommentForm(e);
    }).catch(err => console.log(err));
  }

  // 댓글 삭제 ------------------------------------------------------------------------------------------------------
  const commentDelete = (cno) => {
    apiAxios.delete(`/board/comment/${cno}`,{
      headers : {
        "Authorization" : `Bearer ${user.token}`
      }
    })
    .then(res => {
      console.log(res.data);
      alert(res.data.msg);
      setCommentList([...res.data.commentList]);
      commentCount.current = res.data.commentList.length+1;
    }).catch(err => console.log(err));
  }

  return (
    <div id="board_view_container">
      <table>
        <tbody>
        <tr>
          <th>글번호</th>
          <td>{board.bno}</td>
        </tr>
        <tr>
          <th>제목 : </th>
          <td>{board.title}</td>
        </tr>
        <tr>
          <th>작성자 : </th>
          <td>{board.nickName}</td>
        </tr>
        <tr>
          <th>조회수 : </th>
          <td>{board.bcount}</td>
        </tr>
        <tr>
          <td colSpan="2"> 
            {/* html 적용하여 출력 */}
            <div dangerouslySetInnerHTML={{__html: board.content}}></div>
          </td>
        </tr>
        <tr>
          <td colSpan="2"> 
            <a href="#" id="btn_like" onClick={boardLike}>좋아요 : <span id="like_count">{board.blike}</span> </a>
            <a href="#" id="btn_hate" onClick={boardHate}>싫어요 : <span id="hate_count">{board.bhate}</span> </a>
            {
              decodeToken.sub == board.id &&
              <button className="btn_delete_post" type="button" onClick={deleteBoard}>게시글 삭제</button>
            }
          </td>
        </tr>
        
        <tr>
             <td colSpan="2">
                 
        {
          user.token == null ? <div className="comment_form">
                      <p>로그인 후 작성가능</p>
                  </div> : <div className="comment_form">
                        <textarea name="content" ref={commentContent} placeholder="댓글을 입력하세요"></textarea>
                        <button type="button" onClick={commentWrite} >댓글작성</button>
                </div>
        }
             </td>
         </tr>
     <tr>
       <td colSpan="2">
        <h3>첨부파일 목록</h3>
        <ul>
         {
          file.map((item, idx) => <li key={idx}>
            <a href={`http://localhost:9999/board/download/${item.fno}`}>
              {item.fpath.split('\\').pop()}
            </a></li>)
         }
        </ul>
        </td>
     </tr>
     </tbody>
      </table>
      <hr/>
      <div className="comment_container">
        { commentList.length == 0 ? <p>댓글이 없습니다.</p> : 
        commentList.map((comment, idx) => <div className="comment" key={comment.cno}>
				<p>
					<input type="hidden" name="cno" value={comment.cno }/>
					<span>{comment.id }</span>
					<span>작성일 : {comment.cdate }</span>
					<span><a href="#" className="btn_comment_like" onClick={(e) => commentLikeHate(e, comment.cno)}>좋아요 : <span>{comment.clike }</span></a></span>
					<span><a href="#" className="btn_comment_hate" onClick={(e) => commentLikeHate(e, comment.cno)}>싫어요 : <span>{comment.chate}</span></a></span>
          {
              decodeToken.sub === comment.id && <>
              <button type="button" className="btn_comment_update" onClick={onUpdateCommentForm}>댓글 수정</button>
              <button type="button" className="btn_comment_delete" onClick={() => commentDelete(comment.cno)}>댓글 삭제</button>
              </>
          }
				</p>
				<p className="comment_content" style={{display : 'block'}}>{comment.content }</p>
        {
          decodeToken.sub === comment.id && <p className="comment_form" style={{display : 'none'}}>
            <textarea defaultValue={comment.content}></textarea>
            <button className="btn_comment_update_submit" type="button" onClick={(e) => {commentUpdate(comment.cno, e.target.previousElementSibling.value, e);}}>수정하기</button>
            <button className="btn_comment_update_cancel" type="button" onClick={offUpdateCommentForm}>수정 취소</button>
          </p>

        }
			</div>
        )};
      </div>
      <button type="button" id="btn_more" onClick={moreComment}>댓글 더보기</button>            
    </div>
  );
}