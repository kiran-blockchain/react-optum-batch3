import { useRef } from "react";

export const usePrevious =(data)=>{
  const currentRef = useRef(data);
  const previousRef = useRef(null);
  if(currentRef.current!=data){
    previousRef.current = currentRef.current
    currentRef.current = data
  }
  return previousRef.current
}