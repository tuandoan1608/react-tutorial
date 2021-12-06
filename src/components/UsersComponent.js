import React, { useState, useEffect,useLayoutEffect } from 'react';
import Header from './layouts/header';
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Link } from 'react-router-dom';
import * as thunkUser from '../thunks/users';
import "../App.css";

const DEFAULT_PAGE = 1;
const DEFAULT_PER_PAGE = 3;
const UsersComponent = (props) => {
    const dispatch = useDispatch();
    const { user: currentUser } = useSelector((state) => state.auth);
    const { userList } = useSelector((state) => state.users);
    const [rule, setRule] = useState();
    const [keyword, setKeyword] = useState();

    useLayoutEffect(() => {
        dispatch(thunkUser.getUserThunks({ per_page: DEFAULT_PER_PAGE, page: DEFAULT_PAGE }));
    }, []);

    const onChangeRule = (e) => {

        const rule = e.target.value;
        setRule(rule);
    }
    const onChangeKeyword = (e) => {

        const keyword = e.target.value;
        setKeyword(keyword);
    }
    const onClickSearch = (e) => {

        dispatch(thunkUser.getUserFillter({ rule, keyword }));
    }
    console.log({ userList });

    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    // duplicate user

    const onClickDuplicate = (id) => {

        dispatch(thunkUser.dupUserById({ userId: id }))
            .then(() => {
                props.history.push('/');
                window.location.reload();
            });

    }

    // unlock user
    const onClickUnlock = (id) => {

        dispatch(thunkUser.unlockUserById({ userId: id }))
            .then(() => {
                props.history.push('/');
                window.location.reload();
            });

    }
    //lock user
    const onClickLock = (id) => {

        dispatch(thunkUser.lockUserById({ userId: id }))
            .then(() => {
                props.history.push('/');
                window.location.reload();
            });

    }
    return (
        <div className="container">
             
            <Header />
            <div className="inline-group">
                <a href="/list-customer" className="btn btn-primary">List customer</a>
                <a href="/customer" className="btn btn-light">Customer</a>
            </div>
            <hr></hr>
            <div className="bg-info p-1 ">
                <p>Filler customer</p>
            </div>
            <div className="filter mt-3">
                <div className="row col-md-6">
                    <div className="col">
                        <p>Sales</p>
                    </div>
                    <div className="col">
                        <select id="inputState" name="sales" className="form-control">
                            <option >.Choose..</option>

                        </select>

                    </div>
                </div>
                <div className="row col-md-8 ">
                    <div className="form-check pr-3 float-left">
                        <input className="form-check-input" onChange={onChangeRule} type="radio" name="rule" id="exampleRadios1" value="1" />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Customer ID
                        </label>
                    </div>
                    <div className="form-check pr-3 float-left">
                        <input className="form-check-input" onChange={onChangeRule} type="radio" name="rule" id="exampleRadios1" value="2" />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Display name
                        </label>
                    </div>
                    <div className="form-check pr-3 float-left">
                        <input className="form-check-input" onChange={onChangeRule} type="radio" name="rule" id="exampleRadios1" value="3" />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Phone number
                        </label>
                    </div>
                    <div className="form-check pr-3">
                        <input className="form-check-input" onChange={onChangeRule} type="radio" name="rule" id="exampleRadios1" value="4" />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Email
                        </label>
                    </div>
                    <div className="form-check pr-3">
                        <input className="form-check-input" onChange={onChangeRule} type="radio" name="rule" id="exampleRadios1" value="5" />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Address
                        </label>
                    </div>
                </div>
                <div className="row col-md-6 mt-3">
                    <div className="col">
                        <input type="text" name="keyword" id="keyword" onChange={onChangeKeyword} className="form-control" />
                    </div>
                    <div className="col">
                        <button type="submit" onClick={onClickSearch} className="btn btn-primary">Search</button>
                    </div>
                </div>
                <div className="panel panel-success conten-user">
                    <div className="panel-heading header-user">Users</div>
                    <div className="panel-body tabel-text-input">
                        <div className="row">
                            <div className="col-md-9">
                                <table className="table table-user">
                                    <thead>
                                        <tr>
                                            <td>ID</td>
                                            <td>Name</td>
                                            <td>Avatar</td>
                                            <td>Phone</td>
                                            <td>Address</td>
                                            <td>Action</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { userList && userList?.data?.map(
                                            ({ id, name, avatar, phone, adress, status }, index, array) => (
                                                <tr key={index}>
                                                    <td>{id}</td>
                                                    <td>{name}</td>
                                                    <td > <img className="reponsize" src= {'http://127.0.0.1:8000'+ avatar} alt=""/></td>
                                                    <td>{phone}</td>
                                                    <td>{adress}</td>
                                                    <td>
                                                        <Link to={`/customer/${id}`} className="btn btn-primary">Edit</Link>
                                                        <button className="btn btn-primary" onClick={(e) => { (index == array.length - 1) ? (onClickDuplicate(id, true)) : (onClickDuplicate(id, false)) }}>Duplicate</button>
                                                        {(status === 0 ?
                                                            (<button className="btn btn-danger" onClick={(e) => { (index == array.length - 1) ? (onClickLock(id, true)) : (onClickLock(id, false)) }}>Block</button>)
                                                            : (<button className="btn btn-danger" onClick={(e) => { (index == array.length - 1) ? (onClickUnlock(id, true)) : (onClickUnlock(id, false)) }}>Unlock</button>)
                                                        )}

                                                    </td>

                                                </tr>

                                            )
                                        )}

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UsersComponent;