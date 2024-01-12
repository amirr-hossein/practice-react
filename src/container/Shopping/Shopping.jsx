import React,{Component} from "react";
import WrapperShoping from "../../hoc/WrapperShoping.jsx";
import Controls from "../../components/shop/controls/Controls.jsx";
import Modal from "../../components/shop/Ui/Modal/Modal.jsx";
import Order from "../../components/shop/order/Order.jsx";
import Loader from "../../components/shop/Ui/Loader/Loader.jsx";
import {product} from "../../axios.jsx"
// import axios from "axios";
const prices = {
    product1: 59,
    product2: 89,
    product3: 99,
    product4: 79,
}
export default class Shopping extends Component{
    state = {
        products: null,
        totalPrice: 0,
        modal:false,
        loading:false
    }
    componentDidMount() {
        product
            .get('/products.json')
            .then((response)=>{
                this.setState({products:response.data})
                console.log(response)
        }).catch((error)=>{
            console.log(error)
        })
    }
    addingProduct=(type)=>{
        const prevCount = this.state.products[type]
        const updatedCount = prevCount + 1
        console.log(updatedCount)
        const updatedProducts = {
            ...this.state.products,
        }
        updatedProducts[type] = updatedCount
        console.log(this.state.totalPrice)
        const priceAdd=prices[type]
        const prevPrice=this.state.totalPrice
        const newPrice= prevPrice+priceAdd
        this.setState({totalPrice:newPrice,products:updatedProducts})
        console.log("addingProduct")
    }
    removeProduct=(type)=>{
        const prevCount=this.state.products[type]
        const updatedCount=prevCount-1
        const updateProduct={...this.state.products}
        updateProduct[type]=updatedCount
        const priceSub=prices[type]
        const prevPrice=this.state.totalPrice
        if (prevPrice>0){
            const newPrice=prevPrice-priceSub
            this.setState({totalPrice:newPrice,products:updateProduct})
        }
        console.log("removeProduct")
    }
    showModal=()=>{
        this.setState({modal: true})
    }
    closemodal=()=>{
        this.setState({modal:false})
    }
    Yes=()=>{
        const order = {
            product:this.state.products,
            price:this.state.totalPrice,
            customer:{
                name:"amir",
                email:"amirrhossien.ir@gmail.com"
            }
        }
        this.setState({loading:true})
        product
            .post('/orders.json', order)
            .then(() => {
                this.setState({loading:false,modal:false})
            })
            .catch(() => {
                this.setState({loading:false,modal:false})
            })
    }
    render(){
        // console.log(this.state.products)

        let order=null

        if (this.state.loading){
            order=<Loader/>
        }
        let controls=<Loader/>
        if(this.state.products){
            controls=(
                <Controls modal={this.showModal} productAdd={this.addingProduct} productRemove={this.removeProduct} Price={this.state.totalPrice}/>
            )
            order=(
                <Order Price={this.state.totalPrice} Yes={this.Yes} No={this.closemodal} products={this.state.products}/>
            )
        }
        return(
            <WrapperShoping>
                {this.state.modal?(
                    <Modal modalClose={this.closemodal}>
                        {order}
                    </Modal>
                ):null}
                {controls}
            </WrapperShoping>
        )
    }
}