
//label
//type
//id
//helpid
//placeholder
/* 
  textBoxConfig ={
    label:"",
    type:"",
    id:"",
    name:"",
    helpField:"",
    helpText:"",
    placeholder:""
}*/
export const Textbox = (props) => {
    const { textBoxConfig,formik } = props;
    return (
        <div className="form-group row">
            <label htmlFor={textBoxConfig.id} className="col-sm-2 col-form-label">{textBoxConfig.label}</label>
            <div className="col-sm-4">
            <input type={textBoxConfig.type}
            className="form-control" 
            id={textBoxConfig.id}
            name={textBoxConfig.name}
            value={formik.values[textBoxConfig.name]}
            onChange={formik.handleChange}
            placeholder={textBoxConfig.placeholder}/>
                <small 
                 className="form-text text-danger">{formik.errors[textBoxConfig.name]}</small>
            </div>
        </div>
    )
}
