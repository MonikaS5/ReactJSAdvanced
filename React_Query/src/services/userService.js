import axios from "axios";
import useUserStore from "../store/userStore";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = async () => {
  try {
    const { data } = await axios.get(API_URL);
    useUserStore.getState().setUsers(data);
    return data;
  } catch (error) {
    console.error("Error : ", error);
    throw error;
  }
};

export const addUser = async (newUser) => {
  try {
    const { data } = await axios.post(API_URL, newUser);
    useUserStore.getState().addUser(data);
    return data;
  } catch (error) {
    console.error("Error : ", error);
    throw error;
  }
};
