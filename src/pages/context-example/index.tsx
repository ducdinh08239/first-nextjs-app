import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../context/themeContext'

const ContextExample = () => {
    const { theme, onChangeTheme} = useContext(ThemeContext);
    const { isLightTheme, issue_1, issue_2 } = theme;
    const style = isLightTheme ? issue_1 : issue_2

    return (
        <div>
            {style}
            <br />
            <div className="" onClick={onChangeTheme}>
                <button>Press to change theme text</button>
            </div>
        </div>
    )
}

export default ContextExample
