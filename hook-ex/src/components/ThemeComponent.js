import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeComponent (){
    const theme = useContext(ThemeContext);

    const style = {
        backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
        color: theme === 'light' ? '#333333' : '#ffffff',
        padding: '10px',
        textAlign: 'center'
    }
    return (
        <div style={style}>
            현재 테마 : {theme}
        </div>
    )
}
