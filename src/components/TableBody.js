import React from "react";
import TableRow from "./TableRow";
import propTypes from "prop-types";

const TableBody = (props) => {

    const {cells, data} = props;

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

TableBody.propTypes = {
    data: propTypes.array.isRequired,
}

export default TableBody;