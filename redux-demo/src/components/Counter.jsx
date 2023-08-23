import { useSelector } from "react-redux"

export const Counter=()=>{
    const {counters} = useSelector(x=>x);
    console.log(counters);
    return(
        <h1>Count - {counters.count}  </h1>
    )
}