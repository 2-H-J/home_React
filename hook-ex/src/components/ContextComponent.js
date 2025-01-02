import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Page from "./Page";

export default function ContextComponent() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={theme}>
        <div>
            <h2>useContext 테스트</h2>
            <button onClick={toggleTheme}>테마 변환</button>
            <Page/>
        </div>
        </ThemeContext.Provider>
    )
}