import axios from "axios";

const API_BASE_URL = "https://airaware-5.onrender.com";

export const signUpUser = async (userData) => {
  try {
    const payload = {
      first_name: userData.firstName,
      last_name: userData.lastName,
      email: userData.email,
      password: userData.password,
    };

    const response = await axios.post(`${API_BASE_URL}/register`, payload);
    return response.data;
  } catch (error) {
    console.log('something went wrong');
    throw error.response?.data?.detail || "Signup failed. Please try again.";
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, userData);  
    return response.data;  
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed. Please try again.");
  }
};