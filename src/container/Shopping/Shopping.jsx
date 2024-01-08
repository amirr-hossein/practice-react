import React,{Component} from "react";
import WrapperShoping from "../../hoc/WrapperShoping.jsx";
import Controls from "../../components/controls/Controls";
import Modal from "../../components/Ui/Modal/Modal.jsx";
import Order from "../../components/order/Order.jsx";
const prices = {
    product1: 59,
    product2: 89,
    product3: 99,
    product4: 79,
}
export default class Shopping extends Component{
    state = {
        products: {
            product1: 0,
            product2: 0,
            product3: 0,
            product4: 0,
        },
        totalPrice: 0,
        modal:false,
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
        const newPrice=prevPrice-priceSub
        this.setState({totalPrice:newPrice,products:updateProduct})
        console.log("removeProduct")
    }
    showModal=()=>{
        // const showOrHide=this.state.modal
        this.setState({modal: true})
    }
    closemodal=()=>{
        this.setState({modal:false})
    }
    Yes=()=>{
        console.log("Yes")
    }
    render(){
        return(
            <WrapperShoping>
                <Controls modal={this.showModal} productAdd={this.addingProduct} productRemove={this.removeProduct} price={this.state.totalPrice}/>
                {this.state.modal?(
                    <Modal modalClose={this.closemodal}>
                        <Order Yes={this.Yes} No={this.closemodal} products={this.state.products}/>
                    </Modal>
                ):null}

            </WrapperShoping>
        )
    }
}