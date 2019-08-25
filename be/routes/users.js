var express = require('express');
var router = express.Router();

const users = require('../controller/user');

/* GET users listing. */
router.post('/email', users.signup);
router.post('/signup',users.signup);
router.post('/signin',users.signin);
router.get('/isSignin',users.isSignin);
router.get('/signout',users.signout);

module.exports = router;
