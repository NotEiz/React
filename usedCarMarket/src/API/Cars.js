import axios from 'axios';
import { API } from './const';

export const FetchCars = async () => {
     const response = await axios.get(`${API}/usedCars`);
     return response.data
}

export const DeleteCar = async (id) => {
     const response = await axios.delete(`${API}/usedCars/${id}`);
     return response.data
}

export const CreateNewCar = async (car) => {
     const response = await axios.post(`${API}/usedCars`, car)
     return response.data
}