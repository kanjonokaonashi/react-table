import React from "react";
import propTypes from "prop-types";

const Button = (props) => {

    const {className, text, onClick = () => {}} = props;
    return (
        <button className={className} onClick={onClick}>
            {text}
        </button>
    )
}

// class Button extends Component {
//
//     render() {
//         const {className, text, onClick = () => {}} = this.props;
//         return (
//             <button className={className} onClick={onClick}>
//                 {text}
//             </button>
//         )
//     }
// }

Button.propTypes = {
    className: propTypes.string,
    text: propTypes.string.isRequired,
    onClick: propTypes.func,
}

export default Button;