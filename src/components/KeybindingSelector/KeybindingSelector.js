import { useContext } from "react";
import EditorSettingsContext from "../../context/EditorSettingsContext";

function KeybindingSelector() {
    const [editorSettings, setEditorSettings] = useContext(
        EditorSettingsContext
    );

    function handleChange(event) {
        setEditorSettings((prevEditorSettings) => ({
            ...prevEditorSettings,
            keyboardHandler: event.target.value,
        }));
        localStorage.setItem("keyboardHandler", event.target.value);
    }
    return (
        <select
            className="text-center rounded"
            value={editorSettings.keyboardHandler}
            onChange={handleChange}
        >
            <option value="vscode">VSCode (recommended)</option>
            <option value="sublime">Sublime</option>
            <option value="vim">Vim</option>
            <option value="emacs">Emacs</option>
        </select>
    );
}

export default KeybindingSelector;
