import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { NoMatch } from "./pages/NoMatch"
import { Products } from "./pages/Products"

export const AppRoutes =()=>{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/products" element={<Products/>}></Route>
                <Route path="*" element={<NoMatch/>}></Route>
            </Routes>
        </Router>
    )
}