import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API_URL;

export const parkedVehicles = () => {
  return axios.get(`${API_URL}/vehicles/parked/`);
};

export const allVehicles = () => {
  return axios.get(`${API_URL}/vehicles/`);
};

export const addVehicle = (vehicleData) => {
  return axios.post(`${API_URL}/vehicles/`, vehicleData);
};

export const updateVehicle = (vehicleId, vehicleData) => {
  return axios.put(`${API_URL}/vehicles/${vehicleId}/`, vehicleData);
};

export const deleteVehicle = (vehicleId) => {
  return axios.delete(`${API_URL}/vehicles/${vehicleId}/`);
};