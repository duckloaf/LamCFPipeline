export const handler = async (event) => {
    const response = {
        statusCode: 200,
        message: 'This is the initial PRODUCTION deployment of this code.'
    };
    return response;
};