import { getUserSuccess, getUserFailed, getUserFillTerFailed, getUserFillTerSuccess,editUser, edituserSuccess, edituserFailed } from "../actions/users";
import { axiosInstance } from "../utils/axiosInstance";
import authHeader from "../services/auth.header";
import { getUserFillterService } from '../services/getUser.service';

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


export const getUserThunks = (payload) => async (dispatch) => {

    try {
        const result = await getUserService(payload);
        if (result.data) {
            dispatch(getUserSuccess(result.data));
        }

    } catch (error) {
        dispatch(getUserFailed());
    }
}


export const getUserFillter = (payload) => async (dispatch) => {
    try {
        const result = await getUserFillterService(payload);
        if (result.data) {
            dispatch(getUserFillTerSuccess(result.data));
        }
    } catch (error) {
        dispatch(getUserFillTerFailed());
    }
}


export const editUsers = (payload) => async (dispatch) => {
    try {
        const result = await editUser(payload);
        if (result.data) {
            dispatch(edituserSuccess(result.data));
        }
    } catch (error) {
        dispatch(edituserFailed());
    }
}


