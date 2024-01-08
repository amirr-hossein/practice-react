import WrapperShoping from "../../hoc/WrapperShoping.jsx";
import Backdrop from "../Ui/Backdrop/Backdrop.jsx";
import Button from "../Ui/button/Button.jsx";
const Order=(props)=>{
    const summery = Object.keys(props.products).map((item) => {
        return (
            <li key={item}>
                {item}: {props.products[item]}
            </li>
        )
    })

    return(
        <WrapperShoping>
            <h3>order</h3>
            {/*<Backdrop/>*/}
            <ul>{summery}</ul>
            <p>Continue?</p>
            <Button btn={props.Yes}>Yes</Button>
            <Button btn={props.No}>No</Button>
        </WrapperShoping>
    )
}
export default Order