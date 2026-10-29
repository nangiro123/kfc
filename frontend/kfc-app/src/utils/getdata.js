import api from "./api";

export const getdata= async (url)=>{

let res=await api.get(url)
let {data}= await res;

return data;

} 