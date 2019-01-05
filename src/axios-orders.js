import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-c9cfa.firebaseio.com/'
});

export default instance;