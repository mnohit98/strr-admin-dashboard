import { fetchUtils } from 'react-admin';

const apiUrl = 'http://localhost:3000/api';
const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

export const dataProvider = {
    // Fetch upcoming meetups
    getList: (resource, params) => {
        if (resource === 'upcoming-meetups') {
            const url = `${apiUrl}/activity/1/upcoming-meetups`;
            return httpClient(url).then(({ json }) => ({
                data: json.data.map((item) => ({ ...item, id: item.activity_id })), // Use activity_id as id
                total: json.data.length, // Total number of meetups
            }));
        }
        return Promise.reject('Unknown resource');
    },
    // Add other methods if needed like getOne, update, create, etc.
};
