import { useState } from "react";
import { Counter } from "./components/Counter";
import {  Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Register } from "./pages/Register";
import { Products } from "./pages/Prodcuts";

export const App = () => {
    const companyName ='Optum Global Services';//
    const headerDetails ={
        companyName:"Optum Golbal Services",
        theme:"dark",
        links:['Home','Electronics', 'Apparel']

    }
    const [count,setCount] = useState(10);
    const handleClickFromChild =(e)=>{
        setCount(count+1);
    }
    return (
        <div>
            <Header headerConfig = {headerDetails}/>
            <Products/>
            {/* <Register/>
            <Counter handleClick ={handleClickFromChild}/>{count} */}
            
            <Footer/>
        </div>
    )
}


//1. Component Name must start with Capital Letter
//2. Every Component function must be having a return( ) method.
//3. return method must return only one root/container Tag
//4. Every component must be having an export feature.
//5. Every tag must be having a closing tag
