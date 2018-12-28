var express = require('express');
var router = express.Router();
const baseAuth = require('../../access-controll/base-auth');

/*
    Handlers
*/

const logout = require('./logout');
const register = require('./signUp');
const login = require('./login');

/*
    Routes
*/

router.post('/register', register);
router.post('/register/:type', register);
router.post('/login', login);
router.get('/logout', baseAuth, logout);

module.exports = router;
