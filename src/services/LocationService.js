import axios from "axios";

const API_PREFIX = 'https://airaware-5.onrender.com';

export const getAllLocations = async () => {
  try {
    const response = await axios.get(`${API_PREFIX}/locations`);
    return response.data;      // assume the payload is an array of location objects
  } catch (error) {
    console.error("Error fetching locations:", error);
    throw error.response?.data || "Failed to fetch locations";
  }
};
