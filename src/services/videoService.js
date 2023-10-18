import * as request from '~/utils/httpRequest';

export const getVideoList = async (type = 'for-you', page = 1) => {
    try {
        const res = await request.get(`videos`, {
            params: {
                type,
                page,
            },
        });
        console.log(res);
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getAVideo = async ({ uuid }) => {
    try {
        const res = await request.get(`videos/${uuid}`);
        console.log(res);
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const createVideo = async ({
    description = '',
    upload_file,
    thumbnail_time = 5,
    music,
    viewable = 'public',
    allows = ['comment'],
}) => {
    try {
        const res = await request.get(`videos}`, {
            data: {
                description,
                upload_file,
                thumbnail_time,
                music,
                viewable,
                allows,
            },
        });
        console.log(res);
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
