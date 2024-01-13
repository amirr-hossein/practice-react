import React from 'react'
const Input = (props) => {
    return(
        <>
            <input type={props.type} onChange={props.change}/>
        </>
    )
}

export default Input
