import React, { useState, useRef, useEffect } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Header from "../layouts/header";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/auth';
import { Redirect } from 'react-router-dom';
import {
    makeStyles,
    TextField,
    Button,
    CircularProgress,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "50ch",
        },
        buttonProgress: {
            color: "#fff",
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: -12,
            marginLeft: -12,
        },
    },
}));
const Login = (props) => {
    const form = useRef();
    const checkBtn = useRef();
    const classes = useStyles();
    const disPatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const { isLoggedIn } = useSelector((state) => state.auth);
    const { message } = useSelector(state => state.message);
    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });
    const [errors, setErrors] = useState({});
    useEffect(() => {
        handleValidate(inputs);
    }, [inputs]);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs((inputs) => ({ ...inputs, [name]: value }));
    }


    function handleValidate(values) {
        let errors = {};
        let isValid = true;

        if (!values["userId"]) {
            isValid = false;
            errors["userId"] = "Please enter userid.";
        }
        if (!values["passWord"]) {
            isValid = false;
            errors["passWord"] = "Please enter password";
        }
        setErrors(errors);
        return isValid;
    }

    const handleLogin = (e) => {
        e.preventDefault();

        setLoading(true);
        if (handleValidate(inputs)) {
            disPatch(login(inputs.userId, inputs.passWord))
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
                    <form
                        className={classes.root}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                        }}
                        onSubmit={handleLogin}
                    >
                        <TextField
                            type="text"
                            name="userId"
                            label="userId"
                            value={inputs.userId}
                            onChange={handleChange}
                            fullWidth
                        />

                        <TextField
                            type="password"
                            name="passWord"
                            label="passWord"
                            value={inputs.passWord}
                            onChange={handleChange}
                            fullWidth
                        />
                        <Button
                            disabled={loading}
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Submit
                        </Button>
                        {loading && (
                            <CircularProgress size={24} className={classes.buttonProgress} />
                        )}
                        {message && (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Login;