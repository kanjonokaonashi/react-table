import React from "react";
import propTypes from "prop-types";

const TableHeader = (props) => {

    const cells = props.cells;

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

// class TableHeader extends Component {
//
//     render() {
//         const cells = this.props.cells;
//         return (
//             <thead>
//                 <tr>
//                     {
//                         cells.map((obj, index) => {
//                             return <th key={index}>{obj.name}</th>;
//                         })
//                     }
//                 </tr>
//             </thead>
//         );
//     }
// }

TableHeader.propTypes = {
    cells: propTypes.array.isRequired,
}

export default TableHeader;