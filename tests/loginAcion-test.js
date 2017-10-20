import {loginIn} from '../client/actions/authAction';
import sinon from 'sinon';
import assert from 'assert';

describe('action SIGNED_IN ', function () {
    it('should dispatch correct actions ', function () {
        const dispatch = sinon.spy();
        const login = 'login';
        const password = 'password';

        loginIn(login,password)(dispatch);
        const dispatchedAction = dispatch.getCall(0).args[0];

        assert.deepEqual(dispatchedAction.type, 'SIGNED_IN');
        assert.deepEqual(dispatchedAction.login, login);
        assert.deepEqual(dispatchedAction.password, password);
    });
});