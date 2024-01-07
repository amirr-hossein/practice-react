import React,{Component} from "react";
import WrapperShoping from "../../hoc/WrapperShoping.jsx";
export default class Shopping extends Component{
    state={
        products:{
            products1: 0,
            products2: 0,
            products3: 0,
            products4: 0,

        },
        totalPrice:0
    }
    render(){
        return(
            <WrapperShoping>
                <h1>Controls</h1>
            </WrapperShoping>
        )
    }
}