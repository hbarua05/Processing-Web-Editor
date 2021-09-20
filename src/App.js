import { useState, useEffect } from "react";
import useScript from "./hooks/useScript";
import useDarkMode from "./hooks/useDarkMode";
import ProcessingEditorPage from "./pages/ProcessingEditorPage";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import EditorSettingsContext from "./context/EditorSettingsContext";
import ThemeContext from "./context/ThemeContext";

function App() {
    let [loading, setLoading] = useState(true);
    let editorSettingsHook = useState({
        mode: "java",
        theme: "iplastic",
        defaultValue:
            "float angle = PI/4;\nfloat len = 140;\n\nvoid setup() {\n  size(400, 400);\n}\n\nvoid draw() {\n  background(17, 24, 39);\n\n  pushMatrix();\n  translate(width/2, height);\n  stroke(255);\n  drawBranch(len, angle);\n  popMatrix();\n\n  angle += 0.04;\n\n}\n\nvoid drawBranch(float len, float angle) {\n  line(0, 0, 0, -len);\n\n  if (len > 2) {\n    translate(0, -len);\n    pushMatrix();\n    rotate(angle);\n    drawBranch(len * 0.6, angle);\n    popMatrix();\n\n    pushMatrix();\n    rotate(-angle);\n    drawBranch(len * 0.6, angle);\n    popMatrix();\n  }\n}",
        fontSize: Number(localStorage.getItem("fontSize")) || 16,
        keyboardHandler: localStorage.getItem("keyboardHandler") || "vscode",
    });
    let themeSettingsHook = useDarkMode("light");
    useScript("/processing/processing.js");

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <EditorSettingsContext.Provider value={editorSettingsHook}>
            <ThemeContext.Provider value={themeSettingsHook}>
                <div className="App ">
                    {loading ? (
                        <LoadingScreen loading={loading} />
                    ) : (
                        <ProcessingEditorPage />
                    )}
                </div>
            </ThemeContext.Provider>
        </EditorSettingsContext.Provider>
    );
}

export default App;
