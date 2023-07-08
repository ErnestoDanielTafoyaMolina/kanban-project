
import axios from "./axios"

export const handleLogin = async(userData)=>{
    axios.post(`/login`,userData)
}

export const hanleRegister = async (userData)=>{
    axios.post(`/register`,userData)
}
export const verifyTokenRequest = async () => axios.get(`/auth/verify`);