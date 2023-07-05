import axios from 'axios';
import config from '../config';

const { apiUrl } = config[process.env.NODE_ENV];

const ApiService = {
  getUserData: (userId) => {
    return axios.get(`${apiUrl}/user/${userId}`)
        .then(response => response.data.data)
        .catch(error => {
          console.error('Error:', error);
          throw error;
        });
  },

  getUserActivity: (userId) => {
    return axios.get(`${apiUrl}/user/${userId}/activity`)
        .then(response => response.data.data)
        .catch(error => {
          console.error('Error:', error);
          throw error;
        });
  },

  getUserAverage: (userId) => {
    return axios.get(`${apiUrl}/user/${userId}/average-sessions`)
        .then(response => response.data.data)
        .catch(error => {
          console.error('Error:', error);
          throw error;
        });
  },

  getUserPerformance: (userId) => {
    return axios.get(`${apiUrl}/user/${userId}/performance`)
        .then(response => response.data.data)
        .catch(error => {
          console.error('Error:', error);
          throw error;
        });
  }
};

export default ApiService;
