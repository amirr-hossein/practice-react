import React from "react";
import WrapperShoping from "../../hoc/WrapperShoping.jsx";
import Shopping from "../../container/Shopping/Shopping";
const Layout=(props)=>{
    return(
        <WrapperShoping>
            <div>navigation</div>
            <main>{props.children}</main>
            <Shopping/>
        </WrapperShoping>
    )
}
export default Layout