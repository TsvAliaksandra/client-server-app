const defaultState = {
    login: {},
    password: {},
    name: {},
    age: {}
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'SIGNED_UP' :
            return [
                ...state,
                {
                    login: action.login,
                    password: action.password,
                    name: action.name,
                    age: action.age
                }
            ];
        default:
            return state;
    }


};