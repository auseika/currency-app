import axios from 'axios';

export const Rates = () => axios.get('/rates/daily/').then((res) => res.data);
