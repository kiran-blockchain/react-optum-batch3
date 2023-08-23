import { useDispatch } from "react-redux"
import { increment,reset } from "../store/CounterSlice";

export const Increment=()=>{
    //step1 declare the dispatch hook
    const dispatch = useDispatch();
    return(
       <div>
        <button  onClick={e=>{
            //step 2 call the action method and pass it as a parameter to dispatch
            dispatch(increment());
        }}>Click here to Increment the count</button>
         <button  onClick={e=>{
            //step 2 call the action method and pass it as a parameter to dispatch
            dispatch(reset());
        }}>Click here to Reset the count</button>
        </div>
    )
}