import React from "react";
import propTypes from "prop-types";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = (props) => {

    const {cells, data} = props;

    return (
        <div>
            <table className='fl-table'>
                <TableHeader cells={cells}/>
                <TableBody cells={cells} data={data} />
            </table>
        </div>
    )
}

Table.propTypes = {
    cells: propTypes.array.isRequired,
    data: propTypes.array.isRequired,
}

export default Table;

