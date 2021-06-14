import React from 'react';
import { useTheme } from './ThemeContext';
import {useThemeUpdate} from "./ThemeContext";

function GrandChild() {

    const darkTheme = useTheme();
    const setdarkTheme = useThemeUpdate();


    const style = {
        color: ` ${darkTheme ? "orangered" : ""}`,
        fontSize: `${darkTheme ? "2.5rem" : ""}`
      }

    const changeThemeHandler = (e) => {
        e.preventDefault();
        setdarkTheme(prev => !prev);
    }
    
    return (
        <div>
            <h1 style={style} >Grand child component</h1>
            <button onClick={e => changeThemeHandler(e)} >Toggle Theme</button>
        </div>
    )
}

export default GrandChild
