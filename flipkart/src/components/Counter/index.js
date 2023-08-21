import { useState } from "react"

export const Counter =(props)=>{
    
    return(
        <div>
            <button className="btn btn-primary" 
            onClick={props.handleClick}>Increment</button>
        </div>
    )
}