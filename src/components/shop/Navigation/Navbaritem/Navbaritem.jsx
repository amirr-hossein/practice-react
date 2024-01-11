import React from "react";
const Navbaritem=(props)=>{
    return(
        <li>
            <a href={props.link}>{props.title}</a>
        </li>
    )
}
export default Navbaritem