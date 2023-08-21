import { useState } from "react"

export const Counter =()=>{
    const [count,setCount] = useState(10);
    const handleClick =(e)=>{
        setCount(count+1);
    }
    return(
        <div>
            <button className="btn btn-primary" onClick={handleClick}>Increment</button>{count}
        </div>
    )
}