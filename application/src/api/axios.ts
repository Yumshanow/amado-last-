import axios from "axios";

export const instance = axios.create({
    baseURL: "http://localhost:3030/api/",
    withCredentials: false,
    headers: {
        "Content-Type": "multipart/form-data",
    }
})