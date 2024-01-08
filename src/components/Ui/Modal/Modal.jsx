import "./modal.css"
import WrapperShoping from "../../../hoc/WrapperShoping.jsx";
import Backdrop from "../Backdrop/Backdrop.jsx";
const Modal=(props)=>{
    return(
        <WrapperShoping>
            <Backdrop click={props.modalClose}/>
            <div className={"modal"}>{props.children}</div>
        </WrapperShoping>
    )
}
export default Modal