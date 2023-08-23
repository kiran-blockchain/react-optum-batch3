import { useEffect, useState } from "react"
import { services } from "../services";

export const useApiGet =(url)=>{
    const [result,setResult] = useState({});
    useEffect(()=>{
        const getResult=async()=>{
           const response = await services.getApi(url);
           setResult(response);
        };
        getResult();
    },[]);
    return result;
}