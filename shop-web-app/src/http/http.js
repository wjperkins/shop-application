import axios from 'axios';

const get = async url => {
  const response = await axios.get(url);
  return response.data;
};

const post = async (url, body) => {
  const response = await axios.post(url, body);
  return response.data;
};

const deleteItem = async url => {
  const response = await axios.delete(url);
  return response.data;
};

export default { get, post, deleteItem };
