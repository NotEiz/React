import axios from 'axios';
const API = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = async () => {
     const  response = await axios.get(API)
     return response.data;
}
// 2. sukurti fetchUsers funkciją
// 3. sukurti createUser funkciją
export const createUser = async (user) => {
     const resp = await axios.post(API, user);
     return resp.data;
}
