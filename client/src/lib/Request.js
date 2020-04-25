import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/";

const Get = async (route, headers = {}) => {
  try {
    const { data } = await axios.get(route, {
      headers,
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const Post = async (route, json = {}) => {
  try {
    const { data } = await axios.post(route, json);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { Get, Post };
