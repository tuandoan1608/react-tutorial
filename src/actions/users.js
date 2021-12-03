import {GET_USER_SUCCESS, GET_USER_FAILED,GET_USER_FILLTER_FAILED,GET_USER_FILLTER_SUCCESS,EDIT_USER_FAILED,EDIT_USER_SUCCESS} from './types';

export  const getUserSuccess= (payload)=>({
    type:GET_USER_SUCCESS,
    payload,
});
export  const getUserFillTerSuccess= (payload)=>({
    type:GET_USER_FILLTER_SUCCESS,
    payload,
});

export const getUserFillTerFailed =()=>({
    type:GET_USER_FILLTER_FAILED
});

export const getUserFailed =()=>({
    type:GET_USER_FAILED
});
export const edituserSuccess =(payload)=>({
    type:EDIT_USER_SUCCESS,
    payload,
});

export const edituserFailed =()=>({
    type:EDIT_USER_FAILED
});
