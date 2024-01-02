//for configure  to call request
import axios from 'axios';

// console.log(process.env)
//process.env.NODE_EVN: "development" use for development environment

//localStorage
const isLoggedIn = !!localStorage.getItem('token');
let token = '';
if (isLoggedIn) {
    token = localStorage.getItem('token');
    console.log('token ', token);
}

const httpRequest = axios.create({
    // baseURL: process.env.REACT_APP_BASE_URL,
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

export const updateToken = (newToken) => {
    token = newToken;
    httpRequest.defaults.headers.Authorization = `Bearer ${token}`;
    console.log('bearer ', httpRequest.defaults.headers.Authorization);
};

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export const post = async (path, options = {}) => {
    const response = await httpRequest.post(path, options);
    return response.data;
};

//Listen event when localStorage change token

window.addEventListener('storage', (e) => {
    console.log('TOKEN CHANGE...');
    if (e.key === 'token') {
        console.log('update Token ', e.newValue);
        updateToken(e.newValue);
    }
});

export default httpRequest;
