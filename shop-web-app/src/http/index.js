import axios from 'axios';

const get = async url => {
  try {
    const response = await axios.get(url);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export default get;
