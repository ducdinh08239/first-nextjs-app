import React, { createContext, useState } from 'react'

export const ThemeContext = createContext({} as any)

const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState({
        isLightTheme: true,
        issue_1: "light",
        issue_2: "dark",
    })
    const onChangeTheme = () => {
        setTheme({
            ...theme,
            isLightTheme: !theme.isLightTheme
        })
    }

const themeContextData = {
    theme,
    onChangeTheme
}

return (
    <ThemeContext.Provider value={themeContextData}>
        {children}
    </ThemeContext.Provider>
)
}

export default ThemeContextProvider
