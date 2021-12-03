import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Header from "../layouts/header";
import { useDispatch, useSelector } from 'react-redux';
import {login} from '../../actions/auth';
import  {Redirect}  from 'react-router-dom';
const Require = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        )
    }
};

const Login = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [userId, setUserId] = useState("");
    const [passWord, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const disPatch = useDispatch();

    const { isLoggedIn } = useSelector((state) => state.auth);
  
    const onChangeUserId = (e) => {
        const userId = e.target.value;
        setUserId(userId);
    };
    const onChangePassWord = (e) => {
        const passWord = e.target.value;
        setPassword(passWord);
    };
    const handleLogin = (e) => {
        e.preventDefault();

        setLoading(true);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            disPatch(login(userId, passWord))
                .then(() => {
                    props.history.push('/');
                    window.location.reload();
                })
                .catch(() => {
                    setLoading(false);
                })

        } else {
            setLoading(false);
        }
    };
    if (isLoggedIn) {
        return <Redirect to="/" />;
    }

    return (
        <div className="container ">
            <Header />
            <div className="pagelogin">
                <div className=" formlogin "  >
                    <Form onSubmit={handleLogin} ref={form} >

                        <div className="form-group">
                            <label htmlFor="userid">User ID</label>
                            <Input type="text" name="userid" value={userId} className="form-control" onChange={onChangeUserId} validations={[Require]} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Input type="password" name="password" value={passWord} className="form-control" onChange={onChangePassWord} validations={[Require]} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block" disabled={loading}>
                                {loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                                <span>Login</span>
                            </button>
                        </div>
                        <CheckButton style={{ display: "none" }} ref={checkBtn} />
                    </Form >
                </div>
            </div>
        </div>
    );
}
export default Login;