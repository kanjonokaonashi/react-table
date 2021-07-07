import React, {Component} from "react";
import propTypes from "prop-types";

class TableRow extends Component {

    render() {
        const {cells, item} = this.props;
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
}

TableRow.propTypes = {
    cells: propTypes.array.isRequired,
    item: propTypes.object.isRequired,
}

export default TableRow;