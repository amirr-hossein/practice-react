const Button=(props)=>{
    return(
        <button className={`btn ${props.btnType}`} onClick={props.btn}>
            {props.children}
        </button>
    )
}
export default Button