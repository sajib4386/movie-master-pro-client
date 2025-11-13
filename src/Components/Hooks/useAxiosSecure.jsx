import axios from 'axios';
import React, { useEffect } from 'react'
import useAuth from './useAuth';
import { useNavigate } from 'react-router';

const instance = axios.create({
    baseURL: 'http://localhost:3000/'
});

const useAxiosSecure = () => {
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {

        // Request Interceptor
        const requestInterceptor = instance.interceptors.request.use( async config => {

            const token = user?.accessToken;
            console.log("Token:", token);
            if (token) {
                config.headers.authorization = `Bearer ${token}`;
            }
            return config;
        });

        // Response Interceptor
        const responseInterceptor = instance.interceptors.response.use(
            res => res,
            err => {
                const status = err?.response?.status;
                if (status === 401 || status === 403) {
                    logout().then(() => navigate('/register'));
                }
                return Promise.reject(err);
            }
        );

        return () => {
            instance.interceptors.request.eject(requestInterceptor);
            instance.interceptors.response.eject(responseInterceptor);
        };
    }, [user, logout, navigate]);

    return instance;
};

export default useAxiosSecure;



