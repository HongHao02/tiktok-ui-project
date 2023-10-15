import * as request from '~/utils/httpRequest';

export const login = async ({ email, password }) => {
    try {
        const res = await request.post(`auth/login`, {
            email,
            password,
        });
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
        throw error; // Re-throw the error to propagate it
    }
};

export const getCurrentUser = async ({ token }) => {
    try {
        request.updateToken(token);
        const res = await request.get(`auth/me`);
        console.log(res);
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
