import React from "react";

const Button = (props) => {
    const {text, onClick = () => {}, className, isActive} = props;

    return (
        <button
        // active={isActive}
        className={className}
        onClick={onClick}
    >{text}
    </button>
    )
}

export default Button;