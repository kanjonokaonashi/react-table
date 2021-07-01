import React, {Component} from "react";
import TableRow from "./TableRow";

class TableBody extends Component {

    render() {
        const cells = this.props.cells;
        return (
            <tbody>
            {
                this.props.data.map((item, rowIndex) => {
                    return (
                        <TableRow key={rowIndex} id={item.id} item={item} cells={cells}/>
                    )
                })
            }
            </tbody>
        )
    }
}

export default TableBody;