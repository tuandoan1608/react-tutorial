import produce from "immer";
import * as types from '../actions/types';

const initialState = {
    userList: null
}

const usersProduce = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case types.GET_USER_SUCCESS:
                draft.userList = action.payload.data;
                break;
            case types.GET_USER_FAILED:
                draft.userList = null;
                break;
            case types.GET_USER_FILLTER_SUCCESS:
                draft.userList = action.payload.data;
                break;
            case types.GET_USER_FILLTER_FAILED:
                draft.userList = null;
                break;
            case types.EDIT_USER_SUCCESS:
                draft.userList = action.payload;
                break;
            case types.EDIT_USER_FAILED:
                draft.userList = null;
                break;
            case types.GET_USER_ID_SUCCESS:
                draft.userList = action.payload;
                break;
            case types.GET_USER_ID_FAILED:
                draft.userList = null;
                break;
           
            default:
                break;
        }
    })
}
export default usersProduce;
