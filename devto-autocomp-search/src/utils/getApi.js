import axios from 'axios';

export const getApi = async () => {
  const response = await axios.get('http://localhost:8000/data');
  return response.data;
};
