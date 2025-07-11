import * as request from '~/utils/httpRequest';

export const SuggestedAccounts = async (q, type = 'less') => {
    try {
        const res = await request.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log('Error: ', error);
    }
};
