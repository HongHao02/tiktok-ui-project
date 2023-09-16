import * as request from '~/utils/httpRequest';

export const getSuggested = async ({page , perPage}) => {
    try {
        const res = await request.get(`users/suggested`, {
            params: {
                page, 
                per_page: perPage,
            },
        });
        console.log(res)
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
