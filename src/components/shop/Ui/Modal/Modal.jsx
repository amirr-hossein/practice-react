import "./modal.css"
import WrapperShoping from "../../../../hoc/WrapperShoping.jsx";
import Backdrop from "../Backdrop/Backdrop.jsx";
const Modal=(props)=>{
    return(
        <WrapperShoping>
            <Backdrop click={props.modalClose}/>
            <div className={"modals"}>{props.children}</div>
        </WrapperShoping>
    )
}
export default Modal