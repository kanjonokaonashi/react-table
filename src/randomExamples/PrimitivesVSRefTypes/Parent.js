import React, {Component} from "react";
import ChildButton from "./Child";

class Parent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            arr: [],
        }

        this.onClick = this.onClick.bind(this);
        this.onClick2 = this.onClick2.bind(this);
    }

    onClick() {
        this.state.count += 1;
        this.state.arr.push("parent");
        this.setState({});
    }

    onClick2() {

        this.setState({count: this.state.count+1});
        this.setState({arr: [...this.state.arr, 100]});
        this.printState();
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // console.log("current " ,this.state);
        // console.log("next " , nextState);

        return true;
    }

    printState() {

    }

    render() {
        console.log("rendered parent");
        return (
            <div>
                <ChildButton text="Change state directly" onClick={this.onClick} count={this.state.count} arr={this.state.arr}/>
                <p>The count from the parent component => {this.state.count}</p>
                <p>The array from the parent component => {this.state.arr.join(", ")}</p>
                <ChildButton text="Change state with setState" onClick={this.onClick2} count={this.state.count} arr={this.state.arr}/>
                <p>The count from the parent component => {this.state.count}</p>
                <p>The array from the parent component => {this.state.arr.join(", ")}</p>
            </div>
        )
    }


}

export default Parent;