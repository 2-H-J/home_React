import '../css/BoardWrite.css';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCallback, useMemo, useRef, useState } from 'react';
import apiAxios from '../lib/apiAxios';
export default function BoardWrite() {
    const editor = useRef(null);
    const navigate = useNavigate();
    const token = useSelector(state => state.member.value.token);
    console.log(token);
    //전송할 파일 리스트
    const [fileList, setFileList] = useState([]);
    //파일리스트 출력할 태그
    const fileResult = useMemo(() => {
        return fileList.map((item) => <p key={item.name}>{item.name}</p>);
    }, [fileList]);


    //파일 드래그 앤 드롭 했을때 처리하는 함수
    const fileDropHandler = useCallback((e) => {
        e.preventDefault();
        const data = e.dataTransfer;
        //파일 목록을 배열로 변환
        //fileList에 추가
        setFileList((item) => [...item, ...Array.from(data.files)]);
    }, []);

    //게시글 전송하는 함수
    const boardWriteHandler = () => {
        // 제목, 내용 JSON으로 변환
        const title = document.querySelector('#title').value;
        const content = editor.current.getInstance().getMarkdown();
        // JSON과 파일목록을 폼데이터로 변환
        const fromData = new FormData();
        FormData.append('params', JSON.stringify({ title, content }));
        fileList.forEach((item) => {
            fromData.append('files', item);
        });
        //전송
        apiAxios.post('/board/write', fromData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            console.log(res);
            navigate('/board/' + res.data.bno);
        }).catch(err => {
            console.log(err);
            alert('게시판 글스기 실패');
        });
    }


    return (
        <div className="board_write_container">
            <h1>게시글 작성</h1>
            <div className="form-group">
                <label htmlFor="title">제목</label>
                <input type="text" id="title" name="title" required />
            </div>
            <div className="form-group">
                <label htmlFor="content">내용</label>
                <Editor ref={editor} initailValue=""
                    previewStyle="vertical" height="500px" initialEditType="wysiwyg" />
            </div>
            <div className="form-actions">
                <button type="button" className="btn submit-btn" onClick={boardWriteHandler}>등록</button>
                <a className="btn cancel-btn" onClick={() => navigate(-1)}>취소</a>
            </div>
            <div className="file_drop_area" onDrop={fileDropHandler}
                onDragOver={(e) => e.preventDefault()} onDragEnter={(e) => e.preventDefault()}></div>
            <div className="file_list_view">
                {fileResult}
            </div>
        </div>
    );
}