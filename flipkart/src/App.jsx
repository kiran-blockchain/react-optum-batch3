import { useState } from "react";
import { Counter } from "./components/Counter";
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Register } from "./pages/Register";
import { Products } from "./pages/Products";
import { CartContext } from "./Providers/CartProvider";
import { ThemeContext } from "./Providers/ThemeProvider";
import { Cart } from "./components/Cart";
import { AppRoutes } from "./routes";
import { AuthContext } from "./Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

export const App = () => {
    const navigate =useNavigate();
    const companyName = 'Optum Global Services';//
    const headerDetails = {
        companyName: "Optum Golbal Services",
        theme: "dark",
        links: ['Register', 'Login']
    };
    const [cartItems, setCartItems] = useState([]);
    const [theme, setTheme] = useState("Dark");
    const [profile, setProfile] = useState(false);
    const handleLogin = (data) => {
        if (data.token) {
            localStorage.setItem('token',data.token);
            setProfile({ ...profile, ...data, isLoggedIn: true });
        }else{
            handleLogout();
            navigate("/login");
        }
    };
    const handleLogout = () => {
        localStorage.clear();
        setProfile({ isLoggedIn: false });
    }
    return (
        <div className="container-fluid">
            <AuthContext.Provider value={{ profile, handleLogin, handleLogout }}>
                <ThemeContext.Provider value={{ theme, setTheme }}>
                    <CartContext.Provider value={{ cartItems, setCartItems }}>
                        <Header headerConfig={headerDetails} />
                        {/* <div className="row">
                       <div className="col-md-9">
                        <Products />
                        </div>
                        <div className="col-md-3">
                            
                        </div>
                    </div> */}
                        <AppRoutes />
                        <Footer />
                    </CartContext.Provider>
                </ThemeContext.Provider>
            </AuthContext.Provider>
        </div>
    )
}


//1. Component Name must start with Capital Letter
//2. Every Component function must be having a return( ) method.
//3. return method must return only one root/container Tag
//4. Every component must be having an export feature.
//5. Every tag must be having a closing tag
