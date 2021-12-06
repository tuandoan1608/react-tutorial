import { plugins } from "pretty-format";
import authHeader from "../services/auth.header";
import { axiosInstance } from "../utils/axiosInstance";

const API_URL = `http://127.0.0.1:8000/api/`;
export const getUserService = (payload) => {
    const { page = 1, per_page = 3 } = payload;
    const config = {
        method: "get",
        url: API_URL + `home?per_page=${per_page}&page=${page}`,
        headers: {
            'Authorization': "Bearer" + authHeader(),
            'Accept': 'application/json'
        }
    }

    const res = axiosInstance(config);
    return res;
}

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

    const config = {
        headers:{
            'Authorization': "Bearer" + authHeader(),
            'Accept':'application/json',
           
        },
       
    }
    const res = axiosInstance.post(API_URL + `customer/store/${payload.userId}`,payload.data,config);
    return res;
}

export const getUserByIdService = (payload)=>{
    const {id}= payload;
    const config = {
        method: "get",
        url: API_URL + `customer/${payload.id}`,
        headers:{
            'Authorization': "Bearer" + authHeader(),
            'Accept':'application/json'
        },
        data:payload
    }
   
    const res = axiosInstance(config);
    return res;
}


export const dupUserIdService = (payload)=>{
    const {userId}= payload;
    const config = {
        method: "post",
        url: API_URL + `customer/duplicate/${payload.userId}`,
        headers:{
            'Authorization': "Bearer" + authHeader(),
            'Accept':'application/json'
        },
        data:payload
    }
   
    const res = axiosInstance(config);
    return res;
}

export const unlockUserIdService = (payload)=>{
    const {userId}= payload;
    const config = {
        method: "post",
        url: API_URL + `customer/unlock/${payload.userId}`,
        headers:{
            'Authorization': "Bearer" + authHeader(),
            'Accept':'application/json'
        },
        data:payload
    }
   
    const res = axiosInstance(config);
    return res;
}


export const lockUserIdService = (payload)=>{
    const {userId}= payload;
    const config = {
        method: "post",
        url: API_URL + `customer/lock/${payload.userId}`,
        headers:{
            'Authorization': "Bearer" + authHeader(),
            'Accept':'application/json'
        },
        data:payload
    }
   
    const res = axiosInstance(config);
    return res;
}

