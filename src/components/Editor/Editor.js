import React, { useContext, forwardRef, useEffect } from "react";
import EditorSettingsContext from "../../context/EditorSettingsContext";
import ThemeContext from "../../context/ThemeContext";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-iplastic";
import "ace-builds/src-noconflict/theme-dracula";

import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/ext-error_marker";

import "ace-builds/src-noconflict/keybinding-vim";
import "ace-builds/src-noconflict/keybinding-vscode";
import "ace-builds/src-min-noconflict/keybinding-emacs";
import "ace-builds/src-min-noconflict/keybinding-sublime";

const Editor = forwardRef(function Editor({ children }, ref) {
    const [editorSettings, setEditorSettings] = useContext(
        EditorSettingsContext
    );
    const [theme] = useContext(ThemeContext);

    // Added so that the editors theme changes based on global theme
    useEffect(() => {
        setEditorSettings((prevEditorSettings) => {
            if (theme === "light") {
                let newState = {
                    ...prevEditorSettings,
                    theme: "iplastic",
                };
                return newState;
            } else {
                return {
                    ...prevEditorSettings,
                    theme: "dracula",
                };
            }
        });
    }, [theme, setEditorSettings]);

    return (
        <div className="flex flex-col justify-start w-full mb-5 md:m-0 h-85vh md:w-1/2">
            <p className="text mb-2"> Your Sketch </p>
            <AceEditor
                width="100%"
                height="100%"
                name="editor"
                ref={ref}
                mode={editorSettings.mode}
                theme={editorSettings.theme}
                fontSize={editorSettings.fontSize}
                keyboardHandler={editorSettings.keyboardHandler}
                defaultValue={editorSettings.defaultValue}
                editorProps={{
                    $blockScrolling: true,
                }}
                setOptions={{
                    highlightActiveLine: false,
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                }}
            />
        </div>
    );
});

export default Editor;
