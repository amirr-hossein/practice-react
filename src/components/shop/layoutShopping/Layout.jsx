import React from "react";
import WrapperShoping from "../../../hoc/WrapperShoping.jsx"
import Shopping from "../../../container/Shopping/Shopping.jsx";
import Navbar from "../Navigation/Navbar/Navbar.jsx";
const Layout=(props)=>{
    return(
        <WrapperShoping>
            <Navbar/>
            <main>{props.children}</main>
            <Shopping/>
        </WrapperShoping>
    )
}
export default Layout