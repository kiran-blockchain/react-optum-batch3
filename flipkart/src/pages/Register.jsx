import { Textbox } from "../components/Textbox"
import { registerConfig } from "../config/registerConfig";

export const Register = () => {

    const firstNameObj = {
        label: "First Name",
        type: "text",
        id: "firstName",
        name: "firstName",
        helpField: "",
        helpText: "",
        placeholder: "Enter First Name"
    };
    const lastNameObj = {
        label: "Last Name",
        type: "text",
        id: "lastName",
        name: "lastName",
        helpField: "",
        helpText: "",
        placeholder: "Enter Last Name"
    };
    const passwordObj = {
        label: "Password",
        type: "text",
        id: "password",
        name: "password",
        helpField: "",
        helpText: "",
        placeholder: "Enter Password"
    };

    return (
        <form className="container mt-5">
          
                    <Textbox textBoxConfig={registerConfig.firstName} />
                    <Textbox textBoxConfig={registerConfig.lastName} />
                    <Textbox textBoxConfig={registerConfig.email} />
                    <Textbox textBoxConfig={registerConfig.password} />
                    <Textbox textBoxConfig={registerConfig.confirmPassword} />
        </form>
    )
}