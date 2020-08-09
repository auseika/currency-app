import axios from 'axios';
// @ts-ignore (no types for this yet)
import { API } from '@env';
axios.defaults.baseURL = API;

export const GetTodaysRates = () => axios.get('/rates/daily/').then((res) => res.data);
