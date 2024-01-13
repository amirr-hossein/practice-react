import React from "react";
import Navbaritem from "../Navbaritem/Navbaritem.jsx";
const Navbaritems=()=>{
    return(
        <ul>
            <Navbaritem link="/">shop</Navbaritem>
            <Navbaritem link="/account">Account</Navbaritem>
        </ul>
    )
}
export default Navbaritems