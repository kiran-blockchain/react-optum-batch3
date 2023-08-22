import { useState } from "react";
import { registerConfig } from "../config/registerConfig"
import { useNavigate } from "react-router-dom";
import { Textbox } from "../components/Textbox";
export const Login = () => {
    const [login,setLogin] = useState({   
        email:"",
        password:"",
    });
    const handleChange =(element)=>{
        const updatedValue = login;
        updatedValue[element.name]= element.value;
        setLogin({...updatedValue});
    };
    const navigate = useNavigate();
    return (
        <form className="container mt-5">

            <Textbox textBoxConfig={registerConfig.email} 
            changeEvt={handleChange} />
            <Textbox textBoxConfig={registerConfig.password}
             changeEvt={handleChange} />
            <div class="col-md-3">
                <button className="btn btn-success" onClick={e=>{
                    navigate("/products");
                }}>Login</button>
            </div>
        </form>
    )
}