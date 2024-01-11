import "./Backdrop.css"
const Backdrop=(props)=>{
    return props.modal ? null : <div className={"backdrop"} onClick={props.click}></div>
}
export default Backdrop