import React, {Component} from "react";

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

export default TableRow;