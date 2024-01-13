import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Buttons=(props)=>{
    return(
        <Button variant={props.color} className={props.class} onClick={props.btn}>
            {props.children}
        </Button>
        // <Button variant="primary" onClick={props.btn}>{props.children}</Button>
    )
}
export default Buttons