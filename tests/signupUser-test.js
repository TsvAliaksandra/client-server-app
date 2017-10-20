import assert from 'assert';
import sinon from 'sinon';
import axios from 'axios';
import {signupUser} from '../client/actions/signupAction';

// MyComponent = require('inject-loader!signinUser');
// MyModule = MyComponent({
//     '../client/actions/loginAction' : this.signinUser
// });

describe('Sign up User',function(){
    describe('check signupUser', function () {
        it('should call  once ', function () {
            let post = sinon.stub(axios, 'post');
            const data = 'data';

            signupUser(data)();
            post.restore();

            sinon.assert.calledOnce(post);
        });

        it('should send correct request with parameters to the expected URL', function () {
            let stub = sinon.stub(axios, 'post');
            let expectedUrl = '/signup';
            let data = {
                login: 'login',
                password: 'password',
                name: 'name',
                age: 'age'
            };
            signupUser(data)();
            stub.restore();

            assert.deepEqual(stub.firstCall.args[0], expectedUrl);
            sinon.assert.calledWith(stub, expectedUrl, data);
        });

        let sandbox;
        beforeEach(function () {
            sandbox = sinon.sandbox.create();
        });
        afterEach(function () {
            sandbox.restore();
        });

        it('should call post request', function () {
            const data = {
                login: 'login',
                password: 'password',
                name: 'name',
                age: 'age'
            };

            const resolved = new Promise((res) => res({data}));
            sandbox.stub(axios, 'post').returns(resolved);
            signupUser(data)();
        });
    });
});
