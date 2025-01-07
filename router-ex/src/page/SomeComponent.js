import { useNavigate } from "react-router-dom";

export default function SomeComponent() {
    const navigate = useNavigate();
    
    const goToAboutPage = () => {
        navigate('/about');
    };

    const goToTeamPage = () => {
        navigate('/about/team');
    };

    return (
        <div>
            <h2>SomeComponent</h2>
            <button onClick={goToAboutPage}>소개 페이지로 이동</button>

            <button onClick={goToTeamPage}>팀 소개 페이지로 이동</button>

            <button onClick={() => navigate(-1)}>이전 페이지로 이동</button>
        </div>
    );
}