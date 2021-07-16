import React from "react";
import TableRow from "./TableRow";
import propTypes from "prop-types";
import {useSelector} from "react-redux";

const TableBody = (props) => {

    const {cells} = props;
    const data = useSelector(state => state.data);

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
    cells: propTypes.array.isRequired,
    // data: propTypes.array.isRequired,
}

export default TableBody;