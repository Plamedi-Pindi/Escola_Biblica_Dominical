import axios from 'axios';

const MainAPI = axios.create({
    baseURL: 'http://127.0.0.1:3000/',
    // baseURL: 'https://escola-biblica-dominical-erp.onrender.com/',
    timeout: 5000,
})

export default MainAPI;