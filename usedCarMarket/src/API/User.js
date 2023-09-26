import axios from "axios";
import { API } from "./const";

const FetchUser = async () => {
  const response = await axios.get(`${API}/users`);
  return response.data;
}

export const RegUser = async (user) => {
  const response = await axios.post(`${API}/users`, user);
  return response.data;
};

export const LoginUser = async (LoggingUser) => {
  const response = await FetchUser(LoggingUser);
  const userExists = (user) => 
    user.email === LoggingUser.email && user.password === LoggingUser.password;
console.log(response.find(userExists))
console.log(response.some(userExists))
    return response.some(userExists);
}
