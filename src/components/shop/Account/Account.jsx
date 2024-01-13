import React,{Component} from "react";
import Buttons from "../Ui/button/Button";
import Input from "../Ui/Input/Input.jsx";
import {product} from "../../../axios.jsx";
class Account extends Component{
    state={
        valName:null,
        valPass:null
    }
    changeHandlerName=(event)=>{
        this.setState({
            valName:event.target.value,
        })
    }
    changeHandlerPass=(event)=> {
        this.setState({
            valPass: event.target.value,
        })
    }
    submitHandler=()=>{
        const value={
            valName:this.state.valName,
            valPass:this.state.valPass
        }
        product
            .post('/account.json',value)
            .then((response)=>{
                console.log(response)
            }).catch((error)=>{
            console.log(error)
        })
    }
    render() {

        return(
            <>
                <h2>account</h2>
                <form>
                    <Input type={"text"} change={(event)=>this.changeHandlerName(event)}/>
                    <Input type={"password"} change={(event)=>this.changeHandlerPass(event)}/>
                    <Buttons class={"mb-3 mt-3"} btn={this.submitHandler}>submit</Buttons>
                </form>
            </>
        )
    }
}
export default Account