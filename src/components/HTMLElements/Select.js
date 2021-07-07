import React from "react";
import propTypes from "prop-types";

const Select = (props) => {
    const {className, name, defaultValue, onChange, optionsList} = props;

    return (
        <select className={className} name={name}  defaultValue={defaultValue} onChange={onChange}>
            {
                optionsList.map((option) => <option value={option}>{option}</option>)
            }
        </select>
    )
}

Select.propTypes = {
    className: propTypes.string,
    name: propTypes.string,
    defaultValue: propTypes.string,
    onChange: propTypes.func,
    optionsList: propTypes.array
}

export default Select;