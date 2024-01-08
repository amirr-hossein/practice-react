import "./Controls.css"
import Builder from "./Builder/Builder.jsx";
const products = [
    { title: 'Product 1', type: 'product1' },
    { title: 'Product 2', type: 'product2' },
    { title: 'Product 3', type: 'product3' },
    { title: 'Product 4', type: 'product4' },
]
const Copntrols=(props)=>{
    return(
        <div>
            <p>price:{props.price}</p>
            {products.map((item) => {
                return (
                    <Builder
                        key={item.title}
                        title={item.title}
                        add={() => props.productAdd(item.type)}
                        remove={() => props.productRemove(item.type)}
                    />
                )
            })}
            <button onClick={props.modal}>order</button>
        </div>
    )
}
export default Copntrols