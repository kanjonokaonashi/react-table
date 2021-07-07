import React, {Component} from "react";
import propTypes from "prop-types";

class Button extends Component {

    render() {
        const {className, text, onClick = () => {}} = this.props;
        return (
            <button className={className} onClick={onClick}>
                {text}
            </button>
        )
    }
}

Button.propTypes = {
    className: propTypes.string,
    text: propTypes.string.isRequired,
    onClick: propTypes.func,
}

export default Button;