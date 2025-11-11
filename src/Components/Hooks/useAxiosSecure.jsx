import axios from 'axios';
import useAuth from './useAuth';

const instance = axios.create({
    baseURL: 'http://localhost:3000'
});

const useAxiosSecure = () => {
    const { user } = useAuth()

    // Request Interceptor
    instance.interceptors.request.use(config => {
        return config;
    })

    return instance;
}

export default useAxiosSecure

