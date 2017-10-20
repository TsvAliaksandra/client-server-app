import {signupAction} from '../client/actions/signupAction';
import sinon from 'sinon';
import assert from 'assert';

describe('action SIGNED_UP ', function () {
    it('should dispatch correct actions ', function () {
        const dispatch = sinon.spy();
        const login = 'login';
        const password = 'password';
        const name = 'name';
        const age = 'age';

        signupAction(login,password,name,age)(dispatch);
        const dispatchedAction = dispatch.getCall(0).args[0];

        assert.deepEqual(dispatchedAction.type, 'SIGNED_UP');
        assert.deepEqual(dispatchedAction.login, login);
        assert.deepEqual(dispatchedAction.password, password);
        assert.deepEqual(dispatchedAction.name, name);
        assert.deepEqual(dispatchedAction.age, age);
    });
});
