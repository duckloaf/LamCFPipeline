export const handler = async (event) => {
    const response = {
        statusCode: 200,
        message: 'This is an update from the github UI that should hopefully for real this time trigger the UAT workflow deployment to AWS'
    };
    return response;
};
