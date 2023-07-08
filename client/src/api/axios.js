import axios from "axios";
const baseUrl="localhost:4100/api";

const instance = axios.create({
    baseURL:baseUrl,
    withCredentials:true
});

export default instance;