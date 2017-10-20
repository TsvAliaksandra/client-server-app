import regReducer  from '../client/reducers/signupReducer';
import assert from 'assert';

describe('registration  reducers', function () {
    it('should return the initial state', function () {
        const state = {
            login: undefined,
            password: undefined,
            name: undefined,
            age: undefined
        };
        const action = {type: 'SIGNED_UP'};

        assert.deepEqual(regReducer(state, action), [state]);

    });

    it('should return new state ', function () {

        const action = {
            type: 'SIGNED_UP',
            login: 'login',
            password: 'password',
            name: 'name',
            age: 'age'
        };

        const expected = [
            {
                login: 'login',
                password: 'password',
                name: 'name',
                age: 'age'
            }
        ];

        assert.deepEqual(regReducer({}, action), expected);

    });

});



