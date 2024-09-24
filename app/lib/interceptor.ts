import axios from "axios";
import { API_URL, BASE_URL } from "./utils";

const client = axios.create({
    baseURL: `${API_URL}`,
    withCredentials: true,
    withXSRFToken: true,
});

client.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers['X-Referer'] = `${BASE_URL}`;
    }
    return config;
});


client.interceptors.response.use((response) => {
    return response;
}, (error) => {
    try {
        const { response } = error;
        if (response.status === 401) {
            console.log(response);
        }
    } catch (error) {
        console.log(error);
    }
    throw error
});

export default client