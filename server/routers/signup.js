const express = require('express');
const app = express();

app.post('/signup', (req, res) => {

    let sqlUsers = `INSERT INTO Users (login,password,name,age) VALUES('${req.body.login}', '${req.body.psw}', '${req.body.name}', ${req.body.age})`;
    db.query(sqlUsers, (err, result) => {
        if (err) {
            throw  err;
        }
        else {
            console.log('success');
        }

    });

    let sqlAdmin = `INSERT INTO Admin (login,password) VALUES('${req.body.login}', '${req.body.password}') `;
    db.query(sqlAdmin, (err, result) => {
        if (err) {
            throw  err;
        }
        else {
            console.log('success');

        }

    })
});