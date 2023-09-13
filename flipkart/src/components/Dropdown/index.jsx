
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
export const Dropdown = (props) => {
    const { dropdownConfig,list,formik } = props;
    const buildOptions = ()=>{
     return list.map((item,index)=>{
        return <option key={index} value={item.value}>{item.text}</option>
     })
    }
    return (
        <div class="form-group row">
            <label for={dropdownConfig.id} class="col-sm-2 col-form-label">{dropdownConfig.label}</label>
            <div class="col-sm-4">
            <select
            class="form-control" 
            id={dropdownConfig.id}
            name={dropdownConfig.name}
            value={formik.values[dropdownConfig.name]}
            onChange={formik.handleChange}
            >
                <option value="">Please Select</option>
                {buildOptions()}
            </select>
            <small id={dropdownConfig.id}
                 class="form-text text-danger">{formik.errors[dropdownConfig.name]}</small>
            </div>
        </div>
    )
}
