import React, {useContext, useState} from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext= React.createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
}

export const useThemeUpdate = () => {
    return useContext(ThemeUpdateContext);
}

export const ThemeProvider = ({children}) => {
    
    const  [darkTheme, setdarkTheme] = useState(true);
    const changeThemehandler = () => {
        setdarkTheme(prev => !prev);
    }

    return(
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={changeThemehandler}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    );

}

