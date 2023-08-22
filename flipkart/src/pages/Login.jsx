import { useState } from "react";
import { registerConfig } from "../config/registerConfig"
import { useNavigate } from "react-router-dom";
import { Textbox } from "../components/Textbox";
import { useFormik } from 'formik'
import { ValidateLoginSchema } from "../utils/Schema";
export const Login = () => {
    const [login, setLogin] = useState({
        email: "",
        password: "",
    });
    const handleChange = (element) => {
        const updatedValue = login;
        updatedValue[element.name] = element.value;
        setLogin({ ...updatedValue });
    };
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: login,
        validationSchema: ValidateLoginSchema(),
        onSubmit: (values) => {
            console.log(values);
        },

    })
    return (
        <form className="container mt-5">
            <div class="form-group row">
                <label for="email" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-4">
                    <input type="text"
                        class="form-control"
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                
                        placeholder="Enter email" />
                    <small
                        class="form-text text-danger">{formik.errors.email}</small>
                </div>
            </div>
            <div class="form-group row">
                <label for="password" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-4">
                    <input type="password"
                        class="form-control"
                        id="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange} 
                        placeholder="Enter Password" />
                    <small
                        class="form-text  text-danger">{formik.errors.password}</small>
                </div>
            </div>
            <div class="col-md-3">
                <button className="btn btn-success" type="button" onClick={formik.handleSubmit}>Login</button>
            </div>
        </form>
    )
}