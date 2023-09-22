const serverConnection = async (method = "GET", service, data) => {
    const url = process.env.API_APP_URL + service;
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    }
    if(!!data){
        options.body = JSON.stringify(data);
    }
    const response = await fetch(url, options);
    return response;
}

export default serverConnection;