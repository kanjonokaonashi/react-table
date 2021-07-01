import React, {Component} from "react";
import TableHeader from "./HTMLElements/TableHeader";
import TableBody from "./HTMLElements/TableBody";

class Table extends Component {

    render() {
        const {cells, data} = this.props;
        return (
            <div>
                <table className='fl-table'>
                    <TableHeader cells={cells}/>
                    <TableBody cells={cells} data={data} />
                </table>
            </div>
        )
    }
}

export default Table;

