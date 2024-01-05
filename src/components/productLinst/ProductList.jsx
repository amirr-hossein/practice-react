import {useState,useEffect} from "react";
import Product from "../product/Product.jsx";
const productList=()=>{
    useEffect(()=>{
        console.log("ProductList.js rendering")
    })
    const [products,setProducts]=useState([
        {id:1,title:"book",price:60},
        {id:2,title:"melon",price:20}
    ])
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
            {products.map((item)=>{
                return(
                    <Product title={item.title} price={item.price} change={(event)=> changeTitleHnadle(event,item.id)} key={item.id}/>
                )
            })}
        </>
    )
}
export default productList