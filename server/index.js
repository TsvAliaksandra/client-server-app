const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const sessions = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');

const auth = require('routers/auth');
const signup = require('routers/signup');


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
    console.log('MySql connected')
});

const app = express();

app.use(express.static(path.join(__dirname, '../out')));
app.set('views', path.join(__dirname, '../out '));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());


app.get('/', (req, res) => {
    res.sendFile(`${process.cwd()}/out/test.html`);
});


app.listen(3000, () => {
    console.log('server is running');
});
