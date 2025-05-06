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
    console.log("Sending login request:", userData);

    const params = new URLSearchParams();
    params.append('grant_type', 'password'); // Assuming grant_type is always 'password' for login
    params.append('username', userData.username);
    params.append('password', userData.password);
    // You might need to include scope, client_id, and client_secret here as well,
    // if your backend requires them for this grant_type.
    // Example:
    // params.append('scope', 'your_scope');
    // params.append('client_id', 'your_client_id');
    // params.append('client_secret', 'your_client_secret');

    const response = await axios.post(`${API_PREFIX}/login`, params.toString(), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
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