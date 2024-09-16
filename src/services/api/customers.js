import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API_URL;

export const getAllCustomers = () => {
    return axios.get(`${API_URL}/customers/`);
}

export const addCustomer = (customerData) => {
    return axios.post(`${API_URL}/customers/`, customerData);
}

export const updateCustomer = (customerId, customerData) => {
    return axios.put(`${API_URL}/customers/${customerId}/`, customerData);
}

export const deleteCustomer = (customerId) => {
    return axios.delete(`${API_URL}/customers/${customerId}/`);
}


