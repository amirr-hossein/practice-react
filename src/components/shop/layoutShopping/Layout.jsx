import React from "react";
import WrapperShoping from "../../../hoc/WrapperShoping.jsx"
import Shopping from "../../../container/Shopping/Shopping.jsx";
import Navbar from "../Navigation/Navbar/Navbar.jsx";
import {Routes ,Route} from "react-router-dom";
import Checkout from "../Chekout/Checkout.jsx";
import Account from "../Account/Account.jsx";
const Layout=(props)=>{
    return(
        <WrapperShoping>
            <Navbar/>
            <main>{props.children}</main>
            <Routes>
                <Route path="/account" element={<Account/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/" exact element={<Shopping/>}/>
            </Routes>
        </WrapperShoping>
    )
}
export default Layout