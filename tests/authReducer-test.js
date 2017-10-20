import authReducer from '../client/reducers/authReducer';
import assert from 'assert';

describe('authenticate reducers', function () {
    it('should return the initial state', function () {
        const state = {
            login: undefined,
            password: undefined
        };
        const action = {type: 'SIGNED_IN'};

        assert.deepEqual(authReducer(state, action), [state]);
    });

    it('should return new state ', function () {
        const action = {
            type: 'SIGNED_IN',
            login: 'login',
            password: 'password'
        };
        const expected = [
            {
                login: 'login',
                password: 'password'
            }
        ];

        assert.deepEqual(authReducer({}, action), expected);
    });
});


