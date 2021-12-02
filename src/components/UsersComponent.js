import React from 'react';
import { Link } from 'react-router-dom';
import Header from './layouts/header';



class UsersComponent extends React.Component {
    render() {
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
                        <div class="col">
                            <select id="inputState" name="sales" class="form-control">
                                <option selected>.Choose..</option>

                            </select>

                        </div>
                    </div>
                    <div className="row col-md-8 ">
                        <div className="form-check pr-3 float-left">
                            <input className="form-check-input" type="radio" name="rule" id="exampleRadios1" value="1" />
                            <label className="form-check-label" for="exampleRadios1">
                                Customer ID
                            </label>
                        </div>
                        <div className="form-check pr-3 float-left">
                            <input className="form-check-input" type="radio" name="rule" id="exampleRadios1" value="2" />
                            <label className="form-check-label" for="exampleRadios1">
                                Display name
                            </label>
                        </div>
                        <div className="form-check pr-3 float-left">
                            <input className="form-check-input" type="radio" name="rule" id="exampleRadios1" value="3" />
                            <label className="form-check-label" for="exampleRadios1">
                                Phone number
                            </label>
                        </div>
                        <div className="form-check pr-3">
                            <input className="form-check-input" type="radio" name="rule" id="exampleRadios1" value="4" />
                            <label className="form-check-label" for="exampleRadios1">
                                Email
                            </label>
                        </div>
                        <div className="form-check pr-3">
                            <input className="form-check-input" type="radio" name="rule" id="exampleRadios1" value="5" />
                            <label className="form-check-label" for="exampleRadios1">
                                Address
                            </label>
                        </div>
                    </div>
                    <div class="row col-md-6 mt-3">
                        <div class="col">
                            <input type="text" name="keyword" id="keyword" class="form-control" />
                        </div>
                        <div class="col">
                            <button type="submit" class="btn btn-primary">Search</button>
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
                                                <td>STT</td>
                                                <td>Name</td>
                                                <td>Mobile</td>
                                                <td>Permission</td>
                                                <td>Action</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Vu Duy Luat</td>
                                                <td>0369199605</td>
                                                <td>HY</td>
                                                <td>
                                                    <button type="button" className="btn btn-warning edit-user">Edit</button>
                                                    <button type="button" className="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Vu Duy Luat</td>
                                                <td>0369199605</td>
                                                <td>HY</td>
                                                <td>
                                                    <Link  to="/add" type="button" className="btn btn-warning edit-user">Edit</Link>
                                                    <Link to="/delete" type="button" className="btn btn-danger">Delete</Link>
                                                </td>
                                            </tr>
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
}

export default UsersComponent;