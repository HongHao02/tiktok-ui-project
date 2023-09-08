//for configure  to call request
import axios from 'axios';

// console.log(process.env)
//process.env.NODE_EVN: "development" use for development environment

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};
export default httpRequest;
