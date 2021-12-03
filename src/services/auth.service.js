import axios from "axios";

const url = "http://127.0.0.1:8000/api/";

const login = (userid, password) => {


    
    return axios
        .post(url + 'login', {
            userid,
            password
        })
        .then((response) => {

            if (response.data) {
                localStorage.setItem("user", response.data);
            }
            return response.data;
        })
}

const logout = () => {
    localStorage.removeItem("user");
};
const objectAuth = {
    login,
    logout
};
export default objectAuth;