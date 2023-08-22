import { useState } from "react";
import { Counter } from "./components/Counter";
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Register } from "./pages/Register";
import { Products } from "./pages/Products";
import { CartContext } from "./Providers/CartProvider";

export const App = () => {
    const companyName = 'Optum Global Services';//
    const headerDetails = {
        companyName: "Optum Golbal Services",
        theme: "dark",
        links: ['Home', 'Electronics', 'Apparel']
    };
    const [cartItems,setCartItems] = useState([]);
   
    return (
        <div>
            <CartContext.Provider value={{cartItems,setCartItems}}>
                <Header headerConfig={headerDetails} />
                <Products />
                <Footer />
            </CartContext.Provider>
        </div>
    )
}


//1. Component Name must start with Capital Letter
//2. Every Component function must be having a return( ) method.
//3. return method must return only one root/container Tag
//4. Every component must be having an export feature.
//5. Every tag must be having a closing tag
