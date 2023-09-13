import { useEffect, useState } from "react";
import { Dropdown } from "../components/Dropdown";
import { Textbox } from "../components/Textbox"
import { registerConfig } from "../config/registerConfig";
import { GET_COUNTRIES_URL } from "../constants";
import {  services } from "../services";
import { useApiGet } from "../hooks/useApi";
import { useFormik } from "formik";
import { ValidateLoginSchema } from "../utils/Schema";

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
    }]);
    // const countriesResponse = useApiGet(GET_COUNTRIES_URL);
    // console.log(countriesResponse)


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
    const formik = useFormik({
        initialValues: register,
        validationSchema: ValidateLoginSchema(),
        onSubmit: (values) => {
            console.log(values);
            console.log(formik.values);
            setRegister({...register,...formik.values})
        },
    })

    return (
        <form className="container mt-5">
            <Textbox textBoxConfig={registerConfig.firstName} 
            formik={formik} />
            <Textbox textBoxConfig={registerConfig.lastName} formik={formik}   />
            <Textbox textBoxConfig={registerConfig.email}  formik={formik}  />
            <Textbox textBoxConfig={registerConfig.password}  formik={formik}  />
            <Textbox textBoxConfig={registerConfig.confirmPassword}  formik={formik} />
            <Dropdown dropdownConfig={dropdown} list={countryList}  formik={formik}/>
            <div class="col-md-3">
                <button className="btn btn-success" type="button" onClick={formik.handleSubmit}>Login</button>
            </div>
        </form>
    )
}