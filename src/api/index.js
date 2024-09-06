import axios from 'axios';

export const fetchUsers = (username) => {
  return axios.get(`https://api.github.com/search/users?q=${username}`);
};
