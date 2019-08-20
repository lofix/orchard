import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://rch4rd-58881.firebaseio.com/'
})

export default instance;
