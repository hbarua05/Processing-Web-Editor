import React from "react";
import { createRef } from "react/cjs/react.development";
import Editor from "../components/Editor/Editor";
import Canvas from "../components/Canvas/Canvas";
import EditorControls from "../components/Editor/EditorControls";
import EditorControlBar from "../components/EditorControlBar/EditorControlBar";

class ProcessingEditorPage extends React.Component {
    constructor(props) {
        super(props);
        this.editorRef = createRef();
        this.canvasRef = createRef();
        this.editorControls = EditorControls(this.editorRef, this.canvasRef);
    }

    render() {
        return (
            <div className="absolute top-0 left-0 right-0 max-w-full min-h-full transition duration-500 dark:bg-gray-900 ">
                <EditorControlBar editorControls={this.editorControls} />

                <div className="pt-2 flex flex-row justify-center pb-5">
                    <div className="flex flex-col w-11/12 md:flex-row justify-between items-start">
                        <Editor ref={this.editorRef} />
                        <Canvas ref={this.canvasRef} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProcessingEditorPage;
