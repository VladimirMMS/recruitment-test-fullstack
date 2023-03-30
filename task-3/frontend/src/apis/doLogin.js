
export function doLogin(body) {
    const url= process.env.REACT_APP_BACKEND_URL
    const bodyOpts = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    };
    return fetch(`${url}/auth/login`, bodyOpts);
    
}