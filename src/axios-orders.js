import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-c08df.firebaseio.com/'
});

export default instance;