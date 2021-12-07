import * as actions from "../actions/users";
import { axiosInstance } from "../utils/axiosInstance";
import authHeader from "../services/auth.header";
import * as services from '../services/getUser.service';
import { Link, useHistory, useLocation } from "react-router-dom";
const API_URL = `http://127.0.0.1:8000/api/`;


export const getUserThunks = (payload) => async (dispatch) => {

    try {
        const result = await services.getUserService(payload);
        if (result.data) {
            dispatch(actions.getUserSuccess(result.data));
        }

    } catch (error) {
        dispatch(actions.getUserFailed());
    }
}


export const getUserFillter = (payload) => async (dispatch) => {
    try {
        const result = await services.getUserFillterService(payload);
        if (result.data) {
            dispatch(actions.getUserFillTerSuccess(result.data));
        }
    } catch (error) {
        dispatch(actions.getUserFillTerFailed());
    }
}


export const editUsers = (payload) => async (dispatch) => {
    try {
        const result = await services.editUserService(payload);
        if (result.data) {
            dispatch(actions.editUserSuccess(result.data));
        }
    } catch (error) {
        dispatch(actions.editUserFailed());
    }
}

export const getUserById = (payload) => async (dispatch) => {
    try {
        const result = await services.getUserByIdService(payload);
        if (result.data) {
            dispatch(actions.getUserIdSuccess(result.data));
        }
    } catch (error) {
        dispatch(actions.getUserIdFailed());
    }
}

export const dupUserById = (payload) => async (dispatch) => {
    try {
        const result = await services.dupUserIdService(payload);
        if (result.data) {
            dispatch(actions.dupUserIdSuccess(result.data));
        }
    } catch (error) {
        dispatch(actions.dupUserIdFailed());
    }
}

export const unlockUserById = (payload) => async (dispatch) => {
    try {
        const result = await services.unlockUserIdService(payload);
        if (result.data) {
            dispatch(actions.unLockUserIdSuccess(result.data));
        }
    } catch (error) {
        dispatch(actions.unLockUserIdFailed());
    }
}

export const lockUserById = (payload) => async (dispatch) => {
    try {
        const result = await services.lockUserIdService(payload);
        if (result.data) {
            dispatch(actions.lockUserIdSuccess(result.data));
        }
    } catch (error) {
        dispatch(actions.lockUserIdFailed());
    }
}


