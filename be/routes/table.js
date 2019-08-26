var express = require('express');
var router = express.Router();

const tableController = require('../controller/table');
const authMiddleware = require('../middlewares/auth');

router.get('/list',authMiddleware.auth,tableController.list);
router.post('/save',authMiddleware.auth,tableController.save);
router.post('/findone',authMiddleware.auth,tableController.findone);
router.put('/put',authMiddleware.auth,tableController.put);
router.delete('/delete',authMiddleware.auth,tableController.delete);

module.exports = router;