import { createPortal } from "react-dom";

function Modal({ children, isOpen, toggleModal }) {
    if (!isOpen) {
        return null;
    }

    return createPortal(
        <>
            <div className="modalOverlay" onClick={toggleModal}></div>
            <div className="modal">{children}</div>
        </>,
        document.getElementById("modal")
    );
}

export default Modal;
