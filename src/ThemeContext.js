import React, { Children } from 'react'
import { useState, createContext } from 'react'

const ThemeContext = createContext()


const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('Dark')
    const toggleTheme = () => {
        setTheme(theme === 'Dark' ? 'Light' : 'Dark')
    }
    const value = {
        theme,
        toggleTheme
    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>


    )
}

export { ThemeContext, ThemeProvider }