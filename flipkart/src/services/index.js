import axios from "axios"

 const getApi = async (url)=>{
    try{
        let result = await axios.get(url);
        return result.data;
    }
    catch(ex){
        throw ex;
    }
};
 const postApi = async (url,data)=>{
    try{
        let result = await axios.post(url,data);
        return result.data;
    }
    catch(ex){
        throw ex;
    }
};

export const services = {
    getApi,
    postApi
}