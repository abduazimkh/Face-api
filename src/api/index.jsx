import axios from "axios";

const apiInstance = axios.create({
    baseURL: import.meta.env.VITE_API,
    headers: {
        "Content-Type":"application/json"
    },
    timeout: 1000,
})

export { apiInstance };