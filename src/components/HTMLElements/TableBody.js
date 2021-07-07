import React, {Component} from "react";
import TableRow from "./TableRow";
import propTypes from "prop-types";

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

TableBody.propTypes = {
    cells: propTypes.array.isRequired,
    data: propTypes.array.isRequired,
}

export default TableBody;