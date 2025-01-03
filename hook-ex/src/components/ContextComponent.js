// React의 useState 훅을 가져옵니다. 이를 통해 상태를 관리할 수 있습니다.
import { useState } from "react";

// ThemeContext를 가져옵니다. 이를 통해 전역적으로 테마 데이터를 관리하고 자식 컴포넌트에서 접근할 수 있게 합니다.
import { ThemeContext } from "./ThemeContext";

// Page 컴포넌트를 가져옵니다. 이 컴포넌트는 ThemeContext를 사용할 것으로 예상됩니다.
import Page from "./Page";

// ContextComponent는 전체 애플리케이션 또는 특정 부분에서 테마를 관리하고 전달하기 위한 컴포넌트입니다.
export default function ContextComponent() {
    // useState 훅을 사용하여 테마 상태(theme)를 관리합니다. 기본값은 'light'(밝은 테마)입니다.
    const [theme, setTheme] = useState('light');

    // 테마를 전환하는 함수입니다. 현재 테마가 'light'이면 'dark'로, 'dark'이면 'light'로 변경합니다.
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        // ThemeContext.Provider를 사용하여 하위 컴포넌트들에 theme 데이터를 제공합니다.
        <ThemeContext.Provider value={theme}>
            <div>
                {/* 제목을 표시합니다. */}
                <h2>useContext 테스트</h2>

                {/* 버튼을 클릭하면 toggleTheme 함수가 호출되어 테마가 전환됩니다. */}
                <button onClick={toggleTheme}>테마 변환</button>

                {/* Page 컴포넌트를 렌더링합니다. Page 컴포넌트는 ThemeContext를 통해 테마 데이터를 사용할 수 있습니다. */}
                <Page />
            </div>
        </ThemeContext.Provider>
    );
}
