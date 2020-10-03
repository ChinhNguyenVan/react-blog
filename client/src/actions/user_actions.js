import axios from 'axios';

import {
    LOGIN_USER
} from './types';

export function loginUser (dataToSubmit){
    const request = axios.post('/api/users/login', dataToSubmit)
                    .then(response=> response.data)

    return {
        types:  LOGIN_USER,
        payload: request
    }
}