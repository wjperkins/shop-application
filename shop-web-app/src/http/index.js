import axios from 'axios';

const get = async url => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const post = async (url, body) => {
  try {
    const response = await axios.post(url, body);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default { get, post };
