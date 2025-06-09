import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const {pathname} = useLocation();

    if(loading){
        return <span className="loading loading-spinner text-primary"></span>
    }

    if(!user){
        return <Navigate to='/signin' state={pathname}></Navigate>
    }
    return children;
};

export default PrivateRoute;