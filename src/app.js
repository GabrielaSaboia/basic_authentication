const express = require('express');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

// To support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// To parse cookies from the HTTP Request
app.use(cookieParser());

app.engine('hbs', exphbs({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

// Our requests hadlers will be implemented here...

app.listen(3000);

app.get('/', function (req, res) {
    res.render('home');
});

//request that handles the registration template when the user visits
app.get('./views/register', (req, res) => {
    res.render('./views/register');
});

const b = require('./views/register.hbs');


const crypto = require('crypto');

const getHashedPassword = (password) => {
    const sha256 = crypto.createHash('sha256');
    const hash = sha256.update(password).digest('base64');
    return hash;
}