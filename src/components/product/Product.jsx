import "./Product.css"
import Wrapper from "../../hoc/Wrapper.jsx"
import AuthLogin from "../../context/authLogin.jsx";
import {useContext} from "react";
const Product=(props)=>{
    const logged= useContext(AuthLogin)
    return(
            <Wrapper center="container">
                    {logged.auth ? <p>logged in!</p> : <p>please login!</p>}

                <h1>{props.title}</h1>
                <span>{props.price}</span>
                <br/>
                <input type="text" value={props.title} onChange={props.change}/>
            </Wrapper>
    )
}
export default Product