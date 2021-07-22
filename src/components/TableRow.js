import React from "react";
import propTypes from "prop-types";

const TableRow = (props) => {

    const {cells, item} = props;

    return (
        <tr>
            {
                cells.map((obj) => {
                    return <td key={obj.key}>{obj.render(item)}</td>
                })
            }
        </tr>
    )
}

TableRow.propTypes = {
    cells: propTypes.array.isRequired,
    item: propTypes.object.isRequired,
}

export default TableRow;