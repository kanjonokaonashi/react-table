import React, {Component} from "react";
import TableRow from "./TableRow";

class TableBody extends Component {

    render() {
        const {cells, data} = this.props;
        return (
            <tbody>
            {
                data.map((item, rowIndex) => {
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