import * as types from './types';
//get user
export  const getUserSuccess= (payload)=>({
    type:types.GET_USER_SUCCESS,
    payload,
});
export const getUserFailed =()=>({
    type:types.GET_USER_FAILED
});
//fillTer user
export  const getUserFillTerSuccess= (payload)=>({
    type:types.GET_USER_FILLTER_SUCCESS,
    payload,
});

export const getUserFillTerFailed =()=>({
    type:types.GET_USER_FILLTER_FAILED
});

//edit user
export const editUserSuccess =(payload)=>({
    type:types.EDIT_USER_SUCCESS,
    payload,
});

export const editUserFailed =()=>({
    type:types.EDIT_USER_FAILED
});

// get user id
export const getUserIdSuccess =(payload)=>({
    type:types.EDIT_USER_SUCCESS,
    payload,
});

export const getUserIdFailed =()=>({
    type:types.EDIT_USER_FAILED
});

//duplicate user
export const dupUserIdSuccess =(payload)=>({
    type:types.DUP_USER_ID_SUCCESS,
    payload,
});

export const dupUserIdFailed =()=>({
    type:types.DUP_USER_ID_FAILED
});

// unlock 
export const unLockUserIdSuccess =(payload)=>({
    type:types.UNLOCK_USER_ID_SUCCESS,
    payload,
});

export const unLockUserIdFailed =()=>({
    type:types.UNLOCK_USER_ID_FAILED
});
// lock

export const lockUserIdSuccess =(payload)=>({
    type:types.LOCK_USER_ID_SUCCESS,
    payload,
});

export const lockUserIdFailed =()=>({
    type:types.LOCK_USER_ID_FAILED
});