import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const loginUser = async (formData) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/login`, formData);
        return response.data;
    } catch (error) {
        console.error(error);
        return {};
    }
};

export const registerUser = async (formData) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/register`, formData);
        return response.data;
    } catch (error) {
        console.error(error);
        return {};
    }
};
