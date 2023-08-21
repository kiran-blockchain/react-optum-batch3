import { Dropdown } from "../components/Dropdown";
import { Textbox } from "../components/Textbox"
import { registerConfig } from "../config/registerConfig";

export const Register = () => {
    const dropdown ={
        id:"ddlCountry",
        name:"ddlCountry",
        label:"Select Countries"
    }
    return (
        <form className="container mt-5">
                    <Textbox textBoxConfig={registerConfig.firstName} />
                     <Textbox textBoxConfig={registerConfig.lastName} />
                     <Textbox textBoxConfig={registerConfig.email} />
                    <Textbox textBoxConfig={registerConfig.password} />
                    <Textbox textBoxConfig={registerConfig.confirmPassword} /> 
                    <Dropdown dropdownConfig ={dropdown}/>
        </form>
    )
}