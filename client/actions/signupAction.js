import axios from 'axios';

export const signupAction = (login, password, name, age) => dispatch => {
    dispatch({
        type: 'SIGNED_UP',
        login,
        password,
        name,
        age
    });
};

export const signupUser = (data) => dispatch => {
    return axios.post('/signup', data);
};



