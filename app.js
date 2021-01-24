const express = require('express');
const app = express();
const morgan = require('morgan');
const users = require('./users.json');


app.use(express.json());
app.use(morgan('dev'));

app.post('/login', (req, res, next) => {

    // check user cred in db
    const data = login(req.body);

    res.status(200).json({ data: data });
});


const login = (userData) => {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (userData.userName == user.userName && userData.password == user.password) {
            return user;
        }
    }

    return "Account not exist";
}

module.exports = app;

