export const handler = async (event) => {
    const response = {
        statusCode: 200,
        message: 'This is an update from the github UI that should for real this time trigger the UAT workflow deployment to AWS'
    };
    return response;
};
