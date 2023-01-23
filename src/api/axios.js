import axios from 'axios';

const URL = process.env.REACT_APP_JSON_URL;

const customAxios = axios.create({
  baseURL: URL,
});

export default customAxios;
