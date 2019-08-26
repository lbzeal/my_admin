var express = require('express');
var router = express.Router();

const tableController = require('../controller/table');
const authMiddleware = require('../middlewares/auth');
const fileuploadMiddleware = require('..//middlewares/multer');

router.get('/list',authMiddleware.auth,tableController.list);
router.post('/save',authMiddleware.auth,fileuploadMiddleware,tableController.save);
router.post('/findone',authMiddleware.auth,tableController.findone);
router.patch('/patch',authMiddleware.auth,fileuploadMiddleware,tableController.patch);
router.delete('/delete',authMiddleware.auth,tableController.delete);
router.post('/search',tableController.search);

module.exports = router;