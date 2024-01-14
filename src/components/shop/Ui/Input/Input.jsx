import React from 'react'
const Input = (props) => {
    return(
        <>
            <input size="10" className={props.classInput} type={props.type} onChange={props.change}/>
        </>
    )
}

export default Input
