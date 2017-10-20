import assert from 'assert';
import sinon from 'sinon';
import axios from 'axios';
import {signinUser} from '../client/actions/authAction';

// const MyCompnent = require('inject-loader!signinUser-test');
//
// this.axios = axios({
//     'axios' : this.axios
// });
describe('Sign in User', function () {
    describe('check signinUser', function () {
        it('should call  once ', function () {
            let post = sinon.stub(axios, 'post');
            const data = 'data';

            signinUser(data)();
            post.restore();

            sinon.assert.calledOnce(post);
        });

        it('should send correct request with parameters to the expected URL', function () {
            const stub = sinon.stub(axios, 'post');
            const expectedUrl = '/';
            const data = {
                login: 'login',
                password: 'password'
            };

            signinUser(data)();
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
                login: 'log1',
                password: '1111'
            };

            const resolved = new Promise((res) => res({data}));
            sandbox.stub(axios, 'post').returns(resolved);
            signinUser(data)();
        });
    });
});

