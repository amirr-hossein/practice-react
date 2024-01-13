import React from "react";
import {Link} from "react-router-dom";
const Navbaritem=(props)=>{
    return(
        <li>
            <Link to={props.link}>{props.children}</Link>

        </li>
    )
}
export default Navbaritem