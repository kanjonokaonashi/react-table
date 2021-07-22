import React from "react";
import nav, {Link} from "react-router-dom";

const Navigation = (props) => {

    return (
        <nav className="navMenu">
            <h3>Logo</h3>
            <ul className="nav-links">

                <Link to="/" >
                    <li>
                        Homepage
                    </li>
                </Link>
                <Link to="/products" >
                    <li>
                        Products
                    </li>
                </Link>
                <Link to="/songs" >
                    <li>
                        Songs
                    </li>
                </Link>
                <Link to="/playlists">
                    <li>
                        Playlists
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navigation;

