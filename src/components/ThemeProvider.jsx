import { createContext, useEffect, useState, useMemo } from "react";

export const ThemeContext = createContext({
    theme: "light",
    setTheme: () => { }
})

const ThemeProvider = (props) => {
    const root = window.document.documentElement

    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

    const storedTheme = localStorage.getItem("df-theme")

    const [theme, setTheme] = useState(storedTheme || systemTheme)

    useEffect(() => {
        root.classList.remove("light", "dark")
        root.classList.add(theme)
        localStorage.setItem("df-theme", theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
