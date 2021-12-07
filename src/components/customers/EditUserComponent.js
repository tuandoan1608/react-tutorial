import react, { useState, useRef, useEffect } from "react";
import Header from "../layouts/header";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation,Redirect } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { editUsers, getUserById } from '../../thunks/users';

const EditUserComponent = (props) => {
    const history = useHistory();
    const form = useRef();
    const checkBtn = useRef();
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const userId = pathname.replace("/customer/", "");
    const userList = useSelector((state) => state.users?.userList.data);
    const { user: currentUser } = useSelector((state) => state.auth);
    const [inputs, setInputs] = useState({
        name: "",
        phone: "",
        adress: "",
        email: "",
    });
    const [avatar, setAvatar] = useState();
    const onChangeAvatar = (e) => {
        if (e.target.files && e.target.files[0]) {
            let avatar = e.target.files[0];
            setAvatar(avatar);
        }
    };
    const [loading, setLoading] = useState();
    useEffect(() => {
        dispatch(getUserById({ id: userId }))
    }, []);

    useEffect(() => {
        if (userList) {
            setInputs(userList);
        }
    }, [userList]);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs((inputs) => ({ ...inputs, [name]: value }));
    }

    console.log(userList);




    // check user login
    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();

        data.append("name", inputs.name);
        data.append("phone", inputs.phone);
        data.append("email", inputs.email);
        data.append("adress", inputs.adress);
        data.append("avatar", avatar);
        data.append("userId", userId);
        data.append("status", 1);

        setLoading(true);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            dispatch(editUsers({ userId, data }))
                .then(() => {
                    props.history.push('/');

                })
                .catch(() => {
                    setLoading(false);
                })

        } else {
            setLoading(false);
        }
    };

    return (

        <div className="container">

            <Header />
            <div className="mb-3">
                <Link to="/" > Home</Link>/
                <Link to="" > edit</Link>
            </div>

            <Form onSubmit={handleSubmit} encType="multipart/form-data" ref={form}  >
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <Input className="form-control"
                        type="text" name="name"
                        value={inputs.name}
                        onChange={handleChange} />

                </div>
                <div className="form-group">
                    <label htmlFor="">Avatar</label>
                    <Input className="form-control"
                        type="file" name="avatar"

                        onChange={onChangeAvatar} />

                </div>
                <div className="form-group">
                    <label htmlFor="">Phone</label>
                    <Input className="form-control"
                        type="text" name="phone"
                        value={inputs.phone}
                        onChange={handleChange} />

                </div>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <Input className="form-control"
                        type="text" name="email"
                        value={inputs.email}
                        onChange={handleChange} />

                </div>
                <div className="form-group">
                    <label htmlFor="">Address</label>
                    <Input className="form-control"
                        type="text" name="adress"
                        value={inputs.adress}
                        onChange={handleChange} />

                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-block" disabled={loading}>
                        {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                        )}
                        <span>Save</span>
                    </button>
                    <Link to='/'> Back home </Link>
                </div>
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>
        </div>
    )
}

export default EditUserComponent;