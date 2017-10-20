const defaultState = {
    login: {},
    password: {}
};

export  default (state = defaultState, action) => {
    switch (action.type) {
        case 'SIGNED_IN' :
            return [
                ...state,
                {
                    login: action.login,
                    password: action.password
                }
            ];

        default:
            return state;
    }
};
