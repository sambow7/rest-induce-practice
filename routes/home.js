const router = require('express').Router();
const homeCtrl = require('../controllers/home');

router.get('/', homeCtrl.index);

module.exports = router;