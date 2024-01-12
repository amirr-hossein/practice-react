import Note from "./components/noteApp/Note.jsx"
import ProductList from "./components/Products/productLinst/ProductList.jsx";
import Containers from "./hoc/Containers.jsx"
import AuthLogin from "./context/authLogin.jsx";
import {useEffect,useState,useRef} from "react";
import TitleAppShopping from "./components/shop/titleAppShopping/TitleAppShopping.jsx";
import Layout from "./components/shop/layoutShopping/Layout.jsx";
import "./index.css"
import Blog from "./container/Blog/Blog.jsx";
import {Container} from 'react-bootstrap';
import {BrowserRouter} from "react-router-dom";

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
        <BrowserRouter>
            <Containers>
                <Container>
                    <button ref={btnRef} onClick={toggle}>showOrHide everyone</button>
                    <AuthLogin.Provider value={{ auth: auth , login:authLogin}}>
                        {remove?(
                            <>
                                <Note name={"amir"} a={"render"}/>
                                <ProductList auth={authLogin}/>
                            </>
                        ):null}
                    </AuthLogin.Provider>
                    <TitleAppShopping/>
                    <Layout>
                        <p>فروشگاه</p>
                    </Layout>
                    <Blog/>
                </Container>
            </Containers>

        </BrowserRouter>
  )
}
export default App