import {useState} from "react";
import Product from "../product/Product.jsx";
const productList=(props)=>{
    const [products,setProducts]=useState([
        {id:1,title:"book",price:60},
        {id:2,title:"melon",price:20},
    ])
    const [show,setShow]=useState(false)
    const toggle=()=>{
        const showOrHide=show
        setShow(!showOrHide)
    }
    const changeTitleHnadle=(event,id)=>{
        const getIndexProduct=products.findIndex((product)=>{
            return product.id===id
        })

        const product={...products[getIndexProduct]}

        product.title=event.target.value

        const getProduct=[...products]

        getProduct[getIndexProduct]=product

        setProducts(getProduct)
    }
    return(
        <>
            <button onClick={props.auth}>login!!!</button>
            <button onClick={toggle}>show/hide product</button>
            {show ? (
                <>
                    {products.map((item)=>{
                        return(
                            <Product updateProduct={products} title={item.title} price={item.price} change={(event)=> changeTitleHnadle(event,item.id)} key={item.id}/>
                        )
                    })}
                </>
            ):null}

        </>
    )
}
export default productList