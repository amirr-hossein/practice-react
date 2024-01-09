import React from "react";
import Navbaritem from "../Navbaritem/Navbaritem.jsx";
const Navbaritems=()=>{
    const itemNavbar=[
        {titles:"shop",link:"/"},
        {titles:"chekout",link:"/"},
    ]
    return(
        <ul>
            {itemNavbar.map((item)=>{
                return(
                    <Navbaritem title={item.titles} link={item.link}/>
                )
            })}
        </ul>
    )
}
export default Navbaritems