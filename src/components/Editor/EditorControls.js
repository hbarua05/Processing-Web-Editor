function EditorControls(editorRef, canvasRef) {
    return {
        editorRef,
        canvasRef,
        runCode() {
            this.resetInstance();

            try {
                var editor = this.editorRef.current.editor;
                var processingSource = editor.getValue(),
                    processingCanvas = this.canvasRef.current;
                if (!/size\(\s*\d+\s*,\s*\d+\s*\)/.test(processingSource)) {
                    processingSource = "size(500,400);\n\n" + processingSource;
                }

                this.processingInstance = new window.Processing(
                    processingCanvas,
                    processingSource
                );

                if (typeof this.processingInstance.draw === "function") {
                    this.processingInstance.draw();
                }
            } catch (e) {
                this.displayError(e);
            }
        },
        resetInstance() {
            if (this.processingInstance) {
                this.processingInstance.exit();
                this.processingInstance.background("#cfcfcf");
                this.processingInstance = null;
            }
            this.canvasRef.current.width = 0;
            this.canvasRef.current.height = 0;
        },
        displayError(error) {
            // This table is an array of pairs consisting of a regular
            // expression and a friendly replacement string which can
            // include values matched in the regex. Pair one example:
            //
            // Input Javascript Error:
            // Can't find variable: rectt
            // Output Friendly Error:
            // I'm not sure what 'rect' means. Maybe it's a typo?

            var i,
                regex,
                string,
                outputMessage = error.message,
                errorTable = [
                    [
                        /Can't find variable: (\w+)/,
                        "I'm not sure what '$1' means. Maybe it's a typo?",
                    ],
                    [
                        /(Une|E)xpected token '(\)|\()'/,
                        "Looks like your parentheses don't match up. Remember, you need a right parenthesis for every left parenthesis.",
                    ],
                ];

            for (i = 0; i < errorTable.length; i += 1) {
                regex = errorTable[i][0];
                string = errorTable[i][1];

                if (regex.test(outputMessage)) {
                    outputMessage = outputMessage.replace(regex, string);
                    break;
                }
            }
            alert(outputMessage);
            return;
        },
    };
}

export default EditorControls;
