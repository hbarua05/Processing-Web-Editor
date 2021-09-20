import { useContext } from "react";
import EditorSettingsContext from "../../context/EditorSettingsContext";
import { FaMinus, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";

function FontSizeSelector() {
    const [editorSettings, setEditorSettings] = useContext(
        EditorSettingsContext
    );
    let fontSizeInput;
    function onFontInputChange(event) {
        const INTEGER_REGEX = /^[0-9\b]+$/;
        if (
            event.target.value === "" ||
            INTEGER_REGEX.test(event.target.value)
        ) {
            setEditorSettings((prevEditorSettings) => ({
                ...prevEditorSettings,
                fontSize: event.target.value,
            }));
            localStorage.setItem("fontSize", event.target.value);
        }
    }

    function onFontInputSubmit(event) {
        event.preventDefault();
        let value = parseInt(editorSettings.fontSize, 10);
        if (Number.isNaN(value)) {
            value = 16;
        }
        if (value > 36) {
            value = 36;
        }
        if (value < 8) {
            value = 8;
        }
        setFontSize(value);
    }

    function setFontSize(value) {
        setEditorSettings((prevEditorSettings) => ({
            ...prevEditorSettings,
            fontSize: value,
        }));
        localStorage.setItem("fontSize", value);
    }

    function decreaseFontSize() {
        const newValue = editorSettings.fontSize - 2;
        setFontSize(newValue);
    }

    function increaseFontSize() {
        const newValue = editorSettings.fontSize + 2;
        setFontSize(newValue);
    }

    return (
        <div className="flex flex-row justify-between items-center w-4/12 pb-3">
            <Button
                className="standardControlButton group"
                onClick={decreaseFontSize}
                disabled={editorSettings.fontSize <= 8}
            >
                <FaMinus className="w-3 h-3 stroke-gray-800 fill-gray-800 group-hover:stroke-gray-200 group-hover:fill-gray-200" />
            </Button>
            <form onSubmit={onFontInputSubmit}>
                <input
                    className="text-center w-8 h-8 rounded"
                    value={editorSettings.fontSize}
                    onChange={onFontInputChange}
                    type="text"
                    ref={(element) => {
                        fontSizeInput = element;
                    }}
                    onClick={() => {
                        fontSizeInput.select();
                    }}
                />
            </form>
            <Button
                className={"standardControlButton group"}
                onClick={increaseFontSize}
                disabled={editorSettings.fontSize >= 36}
            >
                <FaPlus className="w-3 h-3 stroke-gray-800 fill-gray-800 group-hover:stroke-gray-200 group-hover:fill-gray-200" />
            </Button>
        </div>
    );
}

export default FontSizeSelector;
