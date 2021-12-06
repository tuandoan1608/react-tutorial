import react, { useState, useRef, useEffect } from "react";
import Header from "../layouts/header";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { editUsers, getUserById } from '../../thunks/users';

const EditUserComponent = (props) => {
    const form = useRef();
    const checkBtn = useRef();
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    const userId = pathname.replace("/customer/", "");
    const { userList } = useSelector((state) => state.users);
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [avatar, setAvatar] = useState();
    const [adress, setAdress] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState();
    useEffect(() => {
        setName(userList?.data?.name);
        setPhone(userList?.data?.phone);
        setAvatar(userList?.data?.avatar);
        setAdress(userList?.data?.adress);
        setEmail(userList?.data?.email);
    }, [userList])

    const onChangeName = (e) => setName(e.target.value);
    const onChangePhone = (e) => setPhone(e.target.value);
    const onChangeEmail = (e) => setEmail(e.target.value);
    const onChangeAvatar = (e) => {
        if (e.target.files && e.target.files[0]) {
            let avatar = e.target.files[0];
            setAvatar(avatar);
        }
    };
    const onChangeAdress = (e) => setAdress(e.target.value);




    useEffect(() => {
        dispatch(getUserById({ id: userId }))
    }, []);

   
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();

        data.append("name", name);
        data.append("phone", phone);
        data.append("email", email);
        data.append("adress", adress);
        data.append("avatar", avatar);
        data.append("userId", userId);
        data.append("status", 1);

        setLoading(true);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            dispatch(editUsers({userId, data}))
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
                        value={name}
                        onChange={onChangeName} />

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
                        value={phone}
                        onChange={onChangePhone} />

                </div>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <Input className="form-control"
                        type="text" name="email"
                        value={email}
                        onChange={onChangeEmail} />

                </div>
                <div className="form-group">
                    <label htmlFor="">Address</label>
                    <Input className="form-control"
                        type="text" name="adress"
                        value={adress}
                        onChange={onChangeAdress} />

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