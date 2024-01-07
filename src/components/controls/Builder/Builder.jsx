import "./Builder.css"
const Builder=(props)=>{
    return(
        <div>
            <div>{props.title}</div>
            <button>Add</button>
            <button>Remove</button>
        </div>
    )
}
export default Builder