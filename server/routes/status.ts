export default eventHandler(async (event) => {
    return {
        status: 200,
        message: "API is running successfully!"
    };
})