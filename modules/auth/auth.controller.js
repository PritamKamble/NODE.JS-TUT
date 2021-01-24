const { loginHandler } = require('./auth.service');

exports.login = (req, res, next) => {
    // check user cred in db
    const data = loginHandler(req.body);

    res.status(200).json({ data: data });
};

exports.register = (req, res, next) => {
    // check user cred in db
    const data = loginHandler(req.body);

    res.status(200).json({ data: data });
};

