import axios from 'axios';
import { API_URL, API_TOKEN } from '../config';

const API = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: API_TOKEN,
  },
});

export { API };
