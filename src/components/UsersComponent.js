import React, { useState, useEffect } from 'react';
import Header from './layouts/header';
import { useSelector, useDispatch } from "react-redux";
import { Redirect,Link } from 'react-router-dom';
import {getUserThunks,getUserFillter} from '../thunks/users';


const DEFAULT_PAGE = 1;
const DEFAULT_PER_PAGE = 3;
const UsersComponent = () => {
    const dispatch = useDispatch();
    const { user: currentUser } = useSelector((state) => state.auth);
    const { userList } = useSelector((state) => state.users);
    const [rule,setRule] = useState();
    const [keyword,setKeyword] =useState();

    useEffect(() => {
        dispatch(getUserThunks({ per_page:DEFAULT_PER_PAGE,page: DEFAULT_PAGE }));
    }, []);

    const onChangeRule =(e)=>{
       const rule = e.target.value;
        setRule(rule);
    } 
    const onChangeKeyword =(e)=>{
        const keyword = e.target.value;
        setKeyword(keyword);
     } 
    const onClickSearch =()=>{
        dispatch(getUserFillter({ rule,keyword }));
    }
    console.log({ userList });
 
    if (!currentUser) {
        return <Redirect to="/login" />;
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
            <div class="filter mt-3">
                <div class="row col-md-6">
                    <div class="col">
                        <p>Sales</p>
                    </div>
                    <div className="col">
                        <select id="inputState" name="sales" className="form-control">
                            <option selected>.Choose..</option>

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
                                        {userList?.data?.map(
                                            ({ id, name,avatar, phone, adress }, index) => (
                                                <tr key={index}>
                                                    <td>{id}</td>
                                                    <td>{name}</td>
                                                    <td>{avatar}</td>
                                                    <td>{phone}</td>
                                                    <td>{adress}</td>
                                                    <td>
                                                        <Link to={`/customer/${id}`} className="btn btn-primary">Edit</Link>
                                                        <button className="btn btn-primary">Duplicate</button>
                                                        <button className="btn btn-danger">Block</button>
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