import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Headers } from "../components/Headers";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Menu from "../pages/Menu";
import Cart from "../pages/Cart";
import PaymentSuccess from "../pages/PaymentSuccess";

const Navigation = () => {
    return (
        <BrowserRouter>
        <Headers/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Menu" element={<Menu/>}/>
            <Route path="/Cart" element={<Cart/>}/>
            <Route path="/PaymentSuccess" element={<PaymentSuccess/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Navigation;