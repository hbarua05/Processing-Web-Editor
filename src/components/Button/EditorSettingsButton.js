import React, { useState } from "react";
import Button from "./Button";
import Modal from "../Modal/Modal";
import { FaCog } from "react-icons/fa";
import ThemeSelector from "../ThemeSelector/ThemeSelector";
import FontSizeSelector from "../FontSizeSelector/FontSizeSelector";
import KeybindingSelector from "../KeybindingSelector/KeybindingSelector";

function EditorSettingsButton() {
    const [modalState, setModalState] = useState(false);

    function toggleModal() {
        setModalState((isOpen) => !isOpen);
    }

    return (
        <>
            <Button
                className="standardControlButton group"
                onClick={toggleModal}
            >
                <FaCog className="w-4 h-4 stroke-gray-800 fill-gray-800 group-hover:stroke-gray-200 group-hover:fill-gray-200" />
            </Button>

            <Modal isOpen={modalState} toggleModal={toggleModal}>
                <h1 className="settingsTitle">Settings</h1>
                <div className="overflow-y-scroll">
                    <div className="border-bottom-dashed py-2 mb-2">
                        <h3 className="preferencesTitle">Theme</h3>
                        <ThemeSelector />
                    </div>
                    <div className="border-bottom-dashed py-2 mb-2">
                        <h3 className="preferencesTitle">Text Size</h3>
                        <FontSizeSelector />
                    </div>
                    <div>
                        <h3 className="preferencesTitle">Text Editor</h3>
                        <KeybindingSelector />
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default EditorSettingsButton;
