import React, {Component} from "react";

class TableHeader extends Component {

    render() {
        const cells = this.props.cells;
        return (
            <thead>
                <tr>
                    {
                        cells.map((obj, index) => {
                            return <th key={index}>{obj.name}</th>;
                        })
                    }
                </tr>
            </thead>
        );
    }
}

export default TableHeader;