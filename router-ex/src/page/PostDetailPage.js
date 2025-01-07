import { useParams } from "react-router-dom";

export default function PostDetailPage() {
    const {postId} = useParams();

    return (
        <div>
            <h2>Post Detail Page</h2>
            <p>게시글 번호 : {postId}</p>
        </div>
    );
}