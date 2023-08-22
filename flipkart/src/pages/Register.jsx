import { useEffect, useState } from "react";
import { Dropdown } from "../components/Dropdown";
import { Textbox } from "../components/Textbox"
import { registerConfig } from "../config/registerConfig";
import { GET_COUNTRIES_URL } from "../constants";
import {  services } from "../services";

export const Register = () => {
    const [register,setRegister] = useState({
        firstName:"",
        lastName :"",
        email:"",
        password:"",
        confirmPassword:"",
        country:""
    });
    const [countryList,setCountryList] = useState([{
        value:"",text:"Please Select"
    }])

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

    useEffect(()=>{
       
        const getCountries = async(url)=>{
            let result  = await services.getApi(url);
            console.log(result);
            const mappedResponse = result.map((item,index)=>{
                return {text:item.name,
                    value:item.alpha2Code}
            });
            setCountryList(mappedResponse);
        };
        
        //make the api call
        getCountries(GET_COUNTRIES_URL)

    },[]);

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