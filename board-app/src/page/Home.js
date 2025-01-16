import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import apiAxios from "../lib/apiAxios";
import "./../css/Home.css";
import { Link } from "react-router-dom";
export default function Home() {
  const [boardList, setBoardList] = useState([]);
  const [pagging, setPagging] = useState({});

  // 홈 컴포넌트가 렌더링 될때 게시글 목록을 출력
  // axios 이용해서 첫번째 페이지 데이터를 가져옴
  // 게시글, 페이징 목록을 가져옴
  const pageRequest = useCallback((pageNo = 1, pageContentEa = 20) => {
    apiAxios
      .get(
        `/board/list?pageNo=${pageNo}&pageContentEa=${pageContentEa}`
      )
      .then((res) => {
        console.log(res.data);
        setBoardList(res.data.boardList);
        setPagging(res.data.pagging);
      });
  }, []);

  useEffect(() => {
    pageRequest();
  }, []);

  if (boardList.length === 0 || !pagging) {
    return null;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>조회수</th>
            <th>좋아요</th>
            <th>싫어요</th>
          </tr>
        </thead>
        <tbody>
          {boardList.map((board) => {
            return (
              <tr key={board.bno}>
                <td>{board.bno}</td>
                <td><Link to={"/board/"+board.bno}>{board.title}</Link></td>
                <td>{board.nickName}</td>
                <td>{board.writeDate}</td>
                <td>{board.bcount}</td>
                <td>{board.blike}</td>
                <td>{board.bhate}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="7">
              <div className="board_footer">
                {/* 이전 페이지 그룹으로 이동 */}
                {pagging.priviousPageGroup ? (
                  <a
                    onClick={(e) =>
                      pageRequest(pagging.startPageOfPageGroup - 1)
                    }
                  >
                    {"◀"}
                  </a>
                ) : null}
                {/* 페이징 정보 출력 */}
                {Array.from({ length: 4 }, (_, i) => {
                  const pageNo = i + pagging.startPageOfPageGroup;
                  return (
                    <a key={pageNo} onClick={(e) => pageRequest(pageNo)}>
                      {pageNo}
                    </a>
                  );
                })}

                {/* 다음 페이지 그룹으로 이동 */}
                {pagging.nextPageGroup ? (
                  <a
                    onClick={(e) => pageRequest(pagging.endPageOfPageGroup + 1)}
                  >
                    {"▶"}
                  </a>
                ) : null}
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}