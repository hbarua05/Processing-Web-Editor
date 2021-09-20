import Loader from "react-spinners/GridLoader";
import ThemeContext from "../../context/ThemeContext";
import { useContext } from "react";

function LoadingScreen({ loading }) {
    const [theme] = useContext(ThemeContext);
    const loaderConfig = {
        color: theme === "light" ? "#1E40AF" : "#BFDBFE",
        loading: loading,
        size: 20,
        margin: 5,
    };
    return (
        <div className="flex flex-row justify-center items-center fixed z-10 inset-0 dark:bg-gray-900">
            <Loader {...loaderConfig} />
        </div>
    );
}

export default LoadingScreen;
