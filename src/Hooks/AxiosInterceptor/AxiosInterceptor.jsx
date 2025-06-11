import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const instance = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_URL}`
});

const AxiosInterceptor = () => {
    const {user} = useContext(AuthContext);

    instance.interceptors.request.use(config => {
        config.headers.Authorization= `Bearer ${user.accessToken}`
        return config
    })
    return instance;
};

export default AxiosInterceptor;