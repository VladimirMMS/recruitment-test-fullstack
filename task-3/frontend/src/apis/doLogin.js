
export async function doLogin(body) {
    const url= process.env.REACT_APP_BACKEND_URL
    const bodyOpts = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    };
    try {
        const response = await (await fetch(`${url}/auth/login`, bodyOpts)).json();
        return response;
    } catch (error) {
        return error
    }
    
}