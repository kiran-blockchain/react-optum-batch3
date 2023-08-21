
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
    const { dropdownConfig } = props;
    return (
        <div class="form-group row">
            <label for={dropdownConfig.id} class="col-sm-2 col-form-label">{dropdownConfig.label}</label>
            <div class="col-sm-4">
            <select
            class="form-control" 
            id={dropdownConfig.id}
            name={dropdownConfig.name}
            >
                <option>Please Select</option>
                <option>India</option>
            </select>
             
            </div>
        </div>
    )
}
