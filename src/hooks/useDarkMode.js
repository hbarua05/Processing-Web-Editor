import { useState, useEffect } from "react";

function useDarkMode(defaultValue) {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || defaultValue
    );
    const oldTheme = theme === "dark" ? "light" : "dark";

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove(oldTheme);
        root.classList.add(theme);

        localStorage.setItem("theme", theme);
    }, [oldTheme, theme]);

    function toggleTheme() {
        setTheme((theme) => {
            return theme === "dark" ? "light" : "dark";
        });
    }
    return [theme, setTheme, toggleTheme];
}

export default useDarkMode;
