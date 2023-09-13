import { Navigate, Route, BrowserRouter as Router, Routes, useNavigate } from "react-router-dom"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { NoMatch } from "./pages/NoMatch"
import { Products } from "./pages/Products"
import { Cart } from "./components/Cart"
import { useContext } from "react"
import { AuthContext } from "./Providers/AuthProvider"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
             <Route path="/products" element={<ProtectedRoutes>
                <Products/>
             </ProtectedRoutes>}></Route>
             <Route path="/cart" element={<ProtectedRoutes>
                <Cart/>
             </ProtectedRoutes>}></Route>
            <Route path="/cart" element={<ProtectedRoutes />}></Route> 
           
            {/* <Route path="*" element={<NoMatch />}></Route> */}
        </Routes>
    )
}

const ProtectedRoutes = ({children}) => {
   
    const { profile } = useContext(AuthContext);
    const token = localStorage.getItem('token');
    if(token&& token.length>1){
        return children  
    }
    else{
       return <Navigate to="/login" replace/>  
    }   
    

}