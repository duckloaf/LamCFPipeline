export const handler = async (event) => {
    const response = {
        statusCode: 200,
        message: 'This is an update that should trigger the UAT workflow deployment'
    };
    return response;
};
