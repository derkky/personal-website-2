import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
    theme: "light",
    setTheme: () => {}
})

const ThemeProvider = (props) => {
    const root = window.document.documentElement
    const [theme, setTheme] = useState("light")

    useEffect(() => {
        root.classList.remove("light", "dark")
        root.classList.add(theme)
      }, [theme])

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
