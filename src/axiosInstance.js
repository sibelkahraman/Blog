import axios from 'axios';

const axiosInstance = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
});

axiosInstance.defaults.headers['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default axiosInstance;