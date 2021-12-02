import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Header from "../layouts/header";

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

    const [userid, setUserid] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const onChangeUserid = (e) => {
        const userid = e.target.value;
        setUserid(userid);
    };
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };
    const handleLogin = (e) => {
        e.preventDefault();

        setLoading(true);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            console.log("asd");
        } else {
            setLoading(false);
        }
    };
    return (
        <div className="container ">
            <Header />
            <div className="pagelogin">
                <div className=" formlogin "  >
                    <Form onSubmit={handleLogin} ref={form} >

                        <div className="form-group">
                            <label htmlFor="userid">User ID</label>
                            <Input type="text" name="userid" value={userid} className="form-control" onChange={onChangeUserid} validations={[Require]} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Input type="password" name="password" value={password} className="form-control" onChange={onChangePassword} validations={[Require]} />
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