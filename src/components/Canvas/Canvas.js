import React, { forwardRef } from "react";

const Canvas = forwardRef(function (props, ref) {
    return (
        <div
            id="editorCanvasContainer"
            className="w-full md:w-5/12 overflow-x-scroll"
        >
            <p className="text mb-2"> Preview </p>
            <canvas
                id="editorCanvas"
                className="transition duration-500 dark:bg-gray-900"
                ref={ref}
            ></canvas>
        </div>
    );
});

export default Canvas;
