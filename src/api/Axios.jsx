import React from 'react'
import axios from 'axios'

const Instance = axios.create({
    baseURL: `http://localhost:4000`
})

export const createProduct = async (url,data) => {
    try {
        const response = await Instance.post(url,data)
        return response.data;
    } catch (error) {
        throw error;
    }
}
export const updateProduct = async (url,data) => {
    try {
        const response = await Instance.put(url,data)
        return response.data;
    } catch (error) {
        throw error;
    }
}
export const getProduct = async (url) => {
    try {
        const response = await Instance.get(url)
        return response.data;
    } catch (error) {
        throw error;
    }
}
export const deleteProduct = async (url) => {
    try {
        const response = await Instance.delete(url)
        return response.data;
    } catch (error) {
        throw error;
    }
}
