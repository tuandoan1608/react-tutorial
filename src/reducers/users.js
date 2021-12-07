import produce from "immer";
import * as types from '../actions/types';

const initialState = {
    userList: []
}

const usersProduce = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USER_SUCCESS:
          return {
            ...state,
            userList: action.payload.data
          }
           
        case types.GET_USER_FAILED:
            return {
                ...state,
                userList: null
              }
        case types.GET_USER_FILLTER_SUCCESS:
            return {
                ...state,
                userList: action.payload.data
              }
        case types.GET_USER_FILLTER_FAILED:
            return {
                ...state,
                userList: null
              }
        case types.EDIT_USER_SUCCESS:
            return {
                ...state,
                userList: action.payload
              }
        case types.EDIT_USER_FAILED:
            return {
                ...state,
                userList: null
              }
        case types.GET_USER_ID_SUCCESS:
            return {
                ...state,
                userList: action.payload?.data
              }
        case types.GET_USER_ID_FAILED:
            return {
                ...state,
                userList: null
              }
       
        default:
            return state;
    }
}
export default usersProduce;
