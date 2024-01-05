import {useState} from "react";
const App=(props)=> {
    const [notes,setNotes]=useState(["rice","amir","mamad"])
    const [giving,setgiving]=useState()
    const [show,setShow]=useState(false)
    const give=(e)=>{
        setgiving(e.target.value)
    }
    const add=()=>{
        let myState=[...notes]
        myState.push(giving)
        setNotes(myState)
    }
    const toggle=()=>{
        const showOrHide=show
        setShow(!showOrHide)
    }
    const removeNote=(nI)=>{
        let newNote=[...notes]
        newNote.splice(nI,1)
        setNotes(newNote)
    }
    return (
        <>
            <button onClick={toggle}>show/hide</button>
            {show ? (
                <div>
                    <input type="text" value={giving} onInput={(e) => give(e)}/>
                    <h1>{props.name}</h1>
                    <ul> 
                        {notes.map((note,noteIndex)=><li onClick={()=>removeNote(noteIndex)} key={noteIndex}>{note}</li>)}
                    </ul>
                    <button onClick={add}>add</button>
                </div>
            ) : null }
        </>
    )
}
export default App