import { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

export const Home = () => {
    const [count,setCount] = useState(0);

    const prevCount = usePrevious(count)
    return (
        <div>
            <h1>usePrevious hook demo</h1>
            <div>{count} - {prevCount}</div>
            <button onClick={e=>{
                setCount(count+1)
            }}>Increment</button>
        </div>
    )
}