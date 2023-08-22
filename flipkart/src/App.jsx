import { useState } from "react";
import { Counter } from "./components/Counter";
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Register } from "./pages/Register";
import { Products } from "./pages/Products";
import { CartContext } from "./Providers/CartProvider";
import { ThemeContext } from "./Providers/ThemeProvider";

export const App = () => {
    const companyName = 'Optum Global Services';//
    const headerDetails = {
        companyName: "Optum Golbal Services",
        theme: "dark",
        links: ['Home', 'Electronics', 'Apparel']
    };
    const [cartItems, setCartItems] = useState([]);
    const [theme, setTheme] = useState("Dark");
    return (
        <div>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <CartContext.Provider value={{ cartItems, setCartItems }}>
                    <Header headerConfig={headerDetails} />
                    <Products />
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
