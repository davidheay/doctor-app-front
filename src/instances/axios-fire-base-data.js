import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://doctor-app-data.firebaseio.com/'
});

export default instance;