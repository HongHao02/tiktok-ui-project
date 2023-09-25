import * as request from '~/utils/httpRequest';

export const getSuggested = async ({ page, perPage }) => {
    try {
        const res = await request.get(`users/suggested`, {
            params: {
                page,
                per_page: perPage,
            },
        });
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getFollowingList = async ({ page }) => {
    try {
        const res = await request.get(`me/followings`, {
            params: {
                page,
            },
        });
        console.log('FollowingList per page: ',res.data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getAnUser = async ({ formattedNickname }) => {
    try {
        const res = await request.get(`users/${formattedNickname}`);
        console.log('An user profile : ',res.data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
