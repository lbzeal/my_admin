var express = require('express');
var router = express.Router();

const users = require('../controller/user');

/* GET users listing. */
router.post('/email', users.sendMa);
// router.post('/register',users.confirmMa,users.register)

module.exports = router;
