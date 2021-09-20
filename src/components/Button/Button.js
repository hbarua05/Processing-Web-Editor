import React from "react";

function Button(props) {
    return (
        <button
            onClick={props.onClick}
            className={`buttonBase ${props.className}`}
            value={props.value}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
}

export default Button;
