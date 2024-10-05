import axios from 'axios';
import { API_HOST } from './constants';

const authProvider = {
    login: async ({ username, password }) => {
        try {
            const response = await axios.post(`${API_HOST}/api/auth/login`, {
                email: username,
                password: password
            });
            const token = response.data.token;
            localStorage.setItem('token', token);
            return await Promise.resolve();
        } catch (error) {
            return await Promise.reject(error);
        }
    },
    logout: () => {
        localStorage.removeItem('token');
        return Promise.resolve();
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    },
    getPermissions: () => Promise.resolve(),
};

export default authProvider;
