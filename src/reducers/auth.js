import { LOGOUT, LOGIN_SUCCESS, LOGIN_FAILED } from '../actions/types';

const user = localStorage.getItem("user");

const initialState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null };

export default function foo(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user

            }
        case LOGIN_FAILED:
            return {
                ...state,
                isLoggedIn: false,
                user: null

            }
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null
            }

        default:
            return state;
    }
}