import { useState } from "react";
import { Dropdown } from "../components/Dropdown";
import { Textbox } from "../components/Textbox"
import { registerConfig } from "../config/registerConfig";

export const Register = () => {
    const [register,setRegister] = useState({
        firstName:"",
        lastName :"",
        email:"",
        password:"",
        confirmPassword:"",
        country:""
    });

    const handleChange =(element)=>{
        console.log(element.name);
        console.log(element.value);
        const updatedValue = register;
        updatedValue[element.name]= element.value;
        setRegister({...updatedValue});
    };
    const dropdown = {
        id: "country",
        name: "country",
        label: "Select Countries"
    };
    const countryList = [{
        value: "IN", text: "India"
    },
    { value: "USA", text: "United States of America" }];

  ;
    return (
        <form className="container mt-5">
            <Textbox textBoxConfig={registerConfig.firstName} 
            changeEvt={handleChange} />
            <Textbox textBoxConfig={registerConfig.lastName}  changeEvt={handleChange} />
            <Textbox textBoxConfig={registerConfig.email}  changeEvt={handleChange} />
            <Textbox textBoxConfig={registerConfig.password}  changeEvt={handleChange} />
            <Textbox textBoxConfig={registerConfig.confirmPassword}  changeEvt={handleChange}/>
            <Dropdown dropdownConfig={dropdown} list={countryList}  changeEvt={handleChange}/>
            <label>{JSON.stringify(register)}</label>
        </form>
    )
}