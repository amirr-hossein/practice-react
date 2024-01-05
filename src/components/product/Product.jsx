import "./Product.css"
const Product=(props)=>{
    return(
        <>
            <div className={"container"}>
                <h1>{props.title}</h1>
                <span>{props.price}</span>
                <br/>
                <input type="text" value={props.title} onChange={props.change}/>
            </div>
        </>
    )
}
export default Product