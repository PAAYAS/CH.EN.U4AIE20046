import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://20.244.56.144', // Replace with actual API base URL
  headers: {
    Authorization: 'Bearer YOUR_ACCESS_TOKEN', // Replace with your access token
  },
});

export const fetchTrainsSchedule = async () => {
  try {
    const response = await instance.get('/trains/schedule');
    return response.data;
  } catch (error) {
    throw error;
  }
};
