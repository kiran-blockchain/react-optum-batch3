
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
        <div class="form-group row">
            <label for={textBoxConfig.id} class="col-sm-2 col-form-label">{textBoxConfig.label}</label>
            <div class="col-sm-4">
            <input type={textBoxConfig.type}
            class="form-control" 
            id={textBoxConfig.id}
            name={textBoxConfig.name}
            value={formik.values[textBoxConfig.name]}
            onChange={formik.handleChange}
            aria-describedby={textBoxConfig.helpField} 
            placeholder={textBoxConfig.placeholder}/>
                <small id={textBoxConfig.id}
                 class="form-text text-danger">{formik.errors[textBoxConfig.name]}</small>
            </div>
        </div>
    )
}
