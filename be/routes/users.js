var express = require('express');
var router = express.Router();

const users = require('../controller/user');

/* GET users listing. */
router.post('/email', users.resolveMa);
router.post('/signup',users.resolveMa);

module.exports = router;
