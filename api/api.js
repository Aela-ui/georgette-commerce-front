'use client';
import axios from 'axios';

export const apiUrl = "http://localhost:3333";

export const findAllProducts = async () => {
    try {
        const response = await axios.get(`${apiUrl}/products`);
        return response.data;
    } catch (err) {
        return {
            error: true,
            message: err.response,
        };
    }
}