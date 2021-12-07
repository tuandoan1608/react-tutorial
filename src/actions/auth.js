import { LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT, SET_MESSAGE, } from "./types";
import authService from '../services/auth.service';

export const login = (userid, password) => (dispatch) => {
    
    return authService.login(userid, password).then(
        (data) => {
            if (data.status_code === 500) {
                dispatch({
                    type: LOGIN_FAILED
                });
                dispatch({
                    type: SET_MESSAGE,
                    payload: 'Tài khoảng hoặc mật khẩu không đúng',
                });
            } else {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: { user: data }
                });
               
            }
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({
                type: LOGIN_FAILED
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    )

}


export const logout = () => (dispatch) => {
    authService.logout();
    dispatch({
        type: LOGOUT
    })
}