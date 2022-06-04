import axios from 'axios';
import { VITE_API_URL } from '../config';

const API = axios.create({
  baseURL: VITE_API_URL,
});

export { API };
