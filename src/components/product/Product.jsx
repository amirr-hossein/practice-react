import "./Product.css"
import Wrapper from "../hoc/Wrapper.jsx"
const Product=(props)=>{
    return(
            <Wrapper center="container">
                <h1>{props.title}</h1>
                <span>{props.price}</span>
                <br/>
                <input type="text" value={props.title} onChange={props.change}/>
            </Wrapper>
    )
}
export default Product