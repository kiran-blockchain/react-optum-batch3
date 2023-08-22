import { useState } from "react";
import { Counter } from "./components/Counter";
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Register } from "./pages/Register";
import { Products } from "./pages/Products";
import { CartContext } from "./Providers/CartProvider";
import { ThemeContext } from "./Providers/ThemeProvider";
import { Cart } from "./components/Cart";
import { AppRoutes } from "./rotues";

export const App = () => {
    const companyName = 'Optum Global Services';//
    const headerDetails = {
        companyName: "Optum Golbal Services",
        theme: "dark",
        links: ['Home', 'Register', 'Login','Products']
    };
    const [cartItems, setCartItems] = useState([]);
    const [theme, setTheme] = useState("Dark");
    return (
        <div>
            <ThemeContext.Provider value={{ theme, setTheme }}>
            
                <CartContext.Provider value={{ cartItems, setCartItems }}>
                <Header headerConfig={headerDetails} />
                    {/* <div class="row">
                       <div className="col-md-9">
                        <Products />
                        </div>
                        <div className="col-md-3">
                            <Cart/>
                        </div>
                    </div> */}
                    <AppRoutes/>
                    <Footer />
                </CartContext.Provider>
            </ThemeContext.Provider>
        </div>
    )
}


//1. Component Name must start with Capital Letter
//2. Every Component function must be having a return( ) method.
//3. return method must return only one root/container Tag
//4. Every component must be having an export feature.
//5. Every tag must be having a closing tag
