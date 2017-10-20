const express = require('express');
const app = express();


app.post('/', (req, res) => {
    const temp = res;
    let testLogPsw = `select  *from Admin where login='${req.body.login}' and password='${req.body.psw}'`;
    db.query(testLogPsw, function (err, res) {
        if (err) {
            throw  err;
        }
        else {
            if (res.length > 0) {
                if (req.body.login === res[0].login && req.body.psw === res[0].password) {
                    temp.send({msg: 'success'});
                    temp.redirect('/users');
                }
            }
            if (res.length === 0) {
                temp.send({msg: 'Login or password is not valid'});
            }
        }
    });
});