import React, {Component} from "react";

class ChildButton extends Component {

    constructor(props) {
        super(props);

        // this.count = this.props.count;
        // this.arr = this.props.arr;
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("current " ,this.props);
        console.log("next " , nextProps);

        return true;
    }
    render() {
        const {count, arr} = this.props;
        // console.log("current " ,this.state);
        // console.log("next " , nextState);
        // this.arr.push("child");
        return (
            <div>
                <button id="randomExButton" onClick={this.props.onClick}>{this.props.text}</button>
            </div>
        )
    }
}

export default ChildButton;