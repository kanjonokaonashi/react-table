import React from "react";
import propTypes from "prop-types";

const Input = (props) => {
    const {className, type, name, defaultValue, onChange} = props;

    return (
        <input
            className={className}
            type={type}
            name={name}
            defaultValue={defaultValue}
            onChange={onChange}
        />
    )
}

Input.propTypes = {
    className: propTypes.string,
    type: propTypes.string,
    name: propTypes.string,
    onChange: propTypes.func,
}

export default Input;