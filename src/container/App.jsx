import Note from "../components/noteApp/Note.jsx"
import ProductList from "../components/productLinst/ProductList.jsx";
import Container from "../components/hoc/Container.jsx"
import {useEffect,useState,useRef} from "react";
const App=(props)=> {
    const [remove,setRemove]=useState(false)
    const [auth,setAuth]=useState(false)
    const {updateProduct}=props
    const toggle=()=>{
        const remmoveEle=remove
        setRemove(!remmoveEle)
    }
    const btnRef=useRef(null)
    useEffect(()=>{
        setTimeout(()=>{
            console.log("ProductList.js rendering")
        },2000)
        btnRef.current.click()
        return () => {
            console.log("cleanUp")
        }
    },[updateProduct])
    const authLogin=()=>{
        setAuth(true)
    }
    return (
        <Container>
            {auth ? <p>logged in!</p> : <p>please login!</p>}
            <button ref={btnRef} onClick={toggle}>showOrHide everyone</button>
            {remove?(
                <>
                    <Note name={"amir"} a={"render"}/>
                    <ProductList auth={authLogin}/>
                </>
            ):null}
        </Container>
  )
}
export default App