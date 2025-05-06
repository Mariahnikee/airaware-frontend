import axios from "axios";

const API_PREFIX = 'https://airaware-5.onrender.com'; 

export const signUpUser = async (userData) => {
  try {
    const payload = {
      first_name: userData.firstName,
      last_name: userData.lastName,
      email: userData.email,
      password: userData.password,
    };

    console.log("Sending signup request:", payload);
    const response = await axios.post(`${API_PREFIX}/register`, payload);
    console.log("Signup response:", response);
    return response.data;
  } catch (error) {
    console.error('Signup error:', error);
    throw error.response?.data?.detail || "Signup failed. Please try again.";
  }
};

export const loginUser = async (userData) => {
  try {
    console.log("Sending login request:", userData); // ✅ userData is in scope here

    const response = await axios.post(`${API_PREFIX}/login`, {
      username: userData.username,
      password: userData.password,
    }, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Login response:", response);
    return response.data;
  } catch (error) {
    console.error("Login error details:", error);
    throw new Error(
      error.response?.data?.message ||
      error.response?.data?.detail?.[0]?.msg ||
      "Login failed. Please try again."
    );
  }
};

