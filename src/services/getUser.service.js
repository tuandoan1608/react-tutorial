import authHeader from "../services/auth.header";
import { axiosInstance } from "../utils/axiosInstance";

const API_URL = `http://127.0.0.1:8000/api/`;
export const getUserFillterService = (payload) => {
    const { rule , keyword  } = payload;
    const config = {
        method: "get",
        url: API_URL + `customer/search?rule=${rule}&keyword=${keyword}`,
        headers:{
            'Authorization': "Bearer" + authHeader(),
            'Accept':'application/json'
        }
    }
   
    const res = axiosInstance(config);
    return res;
}
export const editUserService = (payload) => {
    const { name , avatar,phone,email,adress,id  } = payload;
    const config = {
        method: "get",
        url: API_URL + `customer/store/${payload.id}`,
        headers:{
            'Authorization': "Bearer" + authHeader(),
            'Accept':'application/json'
        },
        data:payload
    }
   
    const res = axiosInstance(config);
    return res;
}
