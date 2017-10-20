import axios from 'axios';

export const loginIn = (login,password) => dispatch => {
    dispatch({
        type: 'SIGNED_IN',
        login,
        password
    });
};

export const signinUser = (data)  => dispatch => {
    return axios.post('/', data);
};
