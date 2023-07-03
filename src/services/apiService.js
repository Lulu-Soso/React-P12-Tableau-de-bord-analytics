import axios from 'axios';

const ApiService = {
  getUserData: (userId) => {
    return axios.get(`http://localhost:3000/user/${userId}`)
        .then(response => response.data.data)
        .catch(error => {
          console.error('Error:', error);
          throw error;
        });
  },

  getUserActivity: (userId) => {
    return axios.get(`http://localhost:3000/user/${userId}/activity`)
        .then(response => response.data.data)
        .catch(error => {
          console.error('Error:', error);
          throw error;
        });
  },

  getUserAverage: (userId) => {
    return axios.get(`http://localhost:3000/user/${userId}/average-sessions`)
        .then(response => response.data.data)
        .catch(error => {
          console.error('Error:', error);
          throw error;
        });
  },

  getUserPerformance: (userId) => {
    return axios.get(`http://localhost:3000/user/${userId}/performance`)
        .then(response => response.data.data)
        .catch(error => {
          console.error('Error:', error);
          throw error;
        });
  }
};

export default ApiService;
