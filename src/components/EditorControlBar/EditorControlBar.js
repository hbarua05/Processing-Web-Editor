import Button from "../Button/Button";
import { FaPlay, FaStop } from "react-icons/fa";
import EditorSettingsButton from "../Button/EditorSettingsButton";

function EditorControlBar({ editorControls }) {
    return (
        <div className="editorControlBar border-bottom-dashed flex justify-center py-3">
            <div className="w-11/12 flex justify-between">
                <div className="w-24 inline-flex justify-between">
                    <Button
                        onClick={() => editorControls.runCode()}
                        className="standardControlButton group"
                    >
                        <FaPlay className="w-4 h-4 stroke-gray-800 fill-gray-800 group-hover:stroke-gray-200 group-hover:fill-gray-200" />
                    </Button>

                    <Button
                        onClick={() => editorControls.resetInstance()}
                        className="invertedControlButton"
                    >
                        <FaStop className="w-4 h-4 stroke-gray-200 fill-gray-200" />
                    </Button>
                </div>
                <EditorSettingsButton />
            </div>
        </div>
    );
}

export default EditorControlBar;
