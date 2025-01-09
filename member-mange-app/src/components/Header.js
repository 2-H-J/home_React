import { Link } from "react-router-dom";
import '../css/header.css';
export default function Header() {
    return (
        <nav>
            <ul>
                <li><Link to="/home">홈</Link></li>
                <li><Link to="/register/view">회원등록</Link></li>
                <li><Link to="/logout">로그아웃</Link></li>
            </ul>
        </nav>
    );
}