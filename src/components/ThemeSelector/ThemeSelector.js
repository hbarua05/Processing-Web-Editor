import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import Button from "../Button/Button";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeSelector() {
    const [theme, , toggleTheme] = useContext(ThemeContext);
    const normalIconTheme =
        "w-3 h-3 stroke-gray-800 fill-gray-800 group-hover:stroke-gray-200 group-hover:fill-gray-200";
    const invertedIconTheme = "w-3 h-3 stroke-gray-200 fill-gray-200";
    return (
        <div className="flex flex-row justify-between w-24 pb-3">
            <Button
                onClick={() => {
                    if (theme === "light") {
                        return;
                    }
                    toggleTheme();
                }}
                className={
                    theme === "light"
                        ? "invertedControlButton group"
                        : "standardControlButton group"
                }
            >
                <FaSun
                    className={
                        theme === "light" ? invertedIconTheme : normalIconTheme
                    }
                />
            </Button>
            <Button
                onClick={() => {
                    if (theme === "dark") {
                        return;
                    }
                    toggleTheme();
                }}
                className={
                    theme === "dark"
                        ? "invertedControlButton group"
                        : "standardControlButton group"
                }
            >
                <FaMoon
                    className={
                        theme === "dark" ? invertedIconTheme : normalIconTheme
                    }
                />
            </Button>
        </div>
    );
}

export default ThemeSelector;
