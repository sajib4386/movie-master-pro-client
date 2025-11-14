import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://movie-master-pro-server-seven.vercel.app/',
});

const useAxiosSecure = () => {
    return axiosInstance;
};

export default useAxiosSecure;

