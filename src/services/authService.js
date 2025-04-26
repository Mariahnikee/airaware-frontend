import axios from 'axios';

// Base URL for API endpoints
const API_URL = 'https://airaware-5.onrender.com';

// Create an axios instance with common configuration
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Authentication service object with methods for auth operations
const authService = {
  // Register new user
  register: async (userData) => {
    try {
      const response = await apiClient.post('/register', userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  // Login user
  login: async (credentials) => {
    try {
      const response = await apiClient.post('/login', credentials);
      
      // If login successful and token received, store it
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  // Logout user
  logout: () => {
    localStorage.removeItem('user');
  },
  
  // Get current user from localStorage
  getCurrentUser: () => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      return JSON.parse(userStr);
    }
    return null;
  },
  
  // Get auth token
  getToken: () => {
    const user = authService.getCurrentUser();
    return user?.token;
  },
  
  // Check if user is authenticated
  isAuthenticated: () => {
    return !!authService.getToken();
  },
  
  // Forgot password request
  forgotPassword: async (email) => {
    try {
      const response = await apiClient.post('/forgot-password', { email });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  // Reset password with token
  resetPassword: async (token, newPassword) => {
    try {
      const response = await apiClient.post('/reset-password', { 
        token, 
        password: newPassword 
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default authService;