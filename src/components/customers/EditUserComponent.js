import react, {useState,useRef} from "react";
import Header from "../layouts/header";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {editUser} from '../../thunks/users';

const EditUserComponent = () => {
    const form = useRef();
    const checkBtn = useRef();
    const { pathname } = useLocation();
    const userId = pathname.replace("/customer/", "");
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [avatar,setAvatar] = useState("");
    const [adress,setAdress] = useState("");
    const [email,setEmail] = useState("");
    const [loading, setLoading] =useState();
    const ditpatch =useDispatch();
    const onChangeName = (e)=> setName(e.target.value);
    const onChangePhone = (e)=> setPhone(e.target.value);
    const onChangeEmail = (e)=> setEmail(e.target.value);
    const onChangeAvatar = (e)=> setAvatar(e.target.value);
    const onChangeAdress= (e)=> setAdress(e.target.value);

    console.log(userId);




    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        if(checkBtn.current._context.errors.length===0){
            ditpatch(editUser(name,phone,avatar,adress,loading,email))
        }
    }
    return (
        <div className="container">
            <Header />
            <div className="mb-3">
                <Link to="/" > Home</Link>/
                <Link to="" > edit</Link>
            </div>

            <Form onSubmit={handleSubmit} ref={form}>
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <Input className="form-control"
                        type="text" name="name"
                        value=""
                        onChange={onChangeName} />

                </div>
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <Input className="form-control"
                        type="text" name="name"
                        value=""
                        onChange={setAvatar} />

                </div>
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <Input className="form-control"
                        type="text" name="name"
                        value=""
                        onChange={setPhone} />

                </div>
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <Input className="form-control"
                        type="text" name="name"
                        value=""
                        onChange={setEmail} />

                </div>
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <Input className="form-control"
                        type="text" name="name"
                        value=""
                        onChange={setAdress} />

                </div>
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>
        </div>
    )
}

export default EditUserComponent;