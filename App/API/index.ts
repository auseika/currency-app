import axios from 'axios';

axios.defaults.baseURL = process.env.API;

export {Rates} from './Rates';
