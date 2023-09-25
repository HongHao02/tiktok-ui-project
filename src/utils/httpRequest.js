//for configure  to call request
import axios from 'axios';

// console.log(process.env)
//process.env.NODE_EVN: "development" use for development environment

const fakeToken =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90aWt0b2suZnVsbHN0YWNrLmVkdS52blwvYXBpXC9hdXRoXC9yZWdpc3RlciIsImlhdCI6MTY5NDk3MzE5MSwiZXhwIjoxNjk3NTY1MTkxLCJuYmYiOjE2OTQ5NzMxOTEsImp0aSI6IlVYSERBSlk2TmZ4Wk5LYjkiLCJzdWIiOjYyNTMsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.glczS9DB6YKKfzBjqVv9mYuuNkvv9NXtIMEZatxVDdo';
const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        Authorization: `Bearer ${fakeToken}`,
    },
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};
export default httpRequest;
