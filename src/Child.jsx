import React from 'react'
import GrandChild from './GrandChild';
import { ThemeProvider } from './ThemeContext';

function Child() {
    return (
        <div>
            <ThemeProvider>
                <GrandChild/>
            </ThemeProvider>
        </div>
    )
}

export default Child;
