const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const sessions = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');


var session;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nodemysql'

});

db.connect((err) => {
    if (err) {
        throw  err;
    }
    console.log('MySql connected');
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use(sessions({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, '../out')));
app.set('views', path.join(__dirname, '../out '));


app.get('/', (req, res) => {
    res.sendFile(`${process.cwd()}/out/test.html`);
});

app.post('/signup', (req, res) => {

    let sqlUsers = `INSERT INTO Users (login,password,name,age) VALUES('${req.body.login}', '${req.body.password}', '${req.body.name}', ${req.body.age})`;
    db.query(sqlUsers, (err, result) => {
        if (err) {
            throw  err;
        }
        else {
            // res.send('success');
        }

    });

    let sqlAdmin = `INSERT INTO Admin (login,password) VALUES('${req.body.login}', '${req.body.password}') `;
    db.query(sqlAdmin, (err, result) => {
        if (err) {
            throw  err;
        }
    });
});


app.post('/', (req, res) => {
    const temp = res;
    let testLogPsw = `select  *from Admin where login='${req.body.login}' and password='${req.body.password}'`;
    db.query(testLogPsw, function (err, res) {
        if (err) {
            throw  err;
        }
        else {
            if (res.length > 0) {
                if (req.body.login === res[0].login && req.body.password === res[0].password) {
                    temp.send({msg: 'success'});
                }
            }
            if (res.length === 0) {
                // temp.send({msg: 'Login or password is not valid'});
                temp.status(401).send({error:  'Login or password is not valid'});
            }
        }
    });
});


app.listen(3000, () => {
    console.log('server is running');
});

