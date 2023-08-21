import {  Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Register } from "./pages/Register";

export const App = () => {
    const companyName ='Optum Global Services';//
    const headerDetails ={
        companyName:"Optum Golbal Services",
        theme:"dark",
        links:['Home','Electronics', 'Apparel']

    }
    return (
        <div>
            <Header headerConfig = {headerDetails}/>
           
            <Register/>
            
            <Footer/>
        </div>
    )
}


//1. Component Name must start with Capital Letter
//2. Every Component function must be having a return( ) method.
//3. return method must return only one root/container Tag
//4. Every component must be having an export feature.
//5. Every tag must be having a closing tag
