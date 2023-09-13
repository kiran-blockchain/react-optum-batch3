import { useRef } from "react";

export const DemoRef =()=>{
   const focusPoint = useRef(null);
   const handleClick = (e=>{
    focusPoint.current.value ="Verify me";
    focusPoint.current.focus();
   })
    return(
        <div>
            <button className="btn btn-primary" onClick={handleClick}>Click Me</button>
            <label>Once the user click the cursor  should pointing to textbox
                </label> 
                <textarea ref={focusPoint}/>
        </div>
    )
}