import "./Builder.css"
import Buttons from "../../Ui/button/Button.jsx";
const Builder=(props)=>{
    return(
        <div>
            <div>{props.title}</div>
            <Buttons color={"danger"} btn={props.add}>Add</Buttons>
            <Buttons btn={props.remove}>Remove</Buttons>
        </div>
    )
}
export default Builder