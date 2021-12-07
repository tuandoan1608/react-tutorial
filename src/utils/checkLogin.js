import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";


export const CheckLogin = () => {
 
    const { user: currentUser } = useSelector((state) => state.auth);
    // check user login
    if (!currentUser) {
        return <Redirect to="/login" />;
    }

}