const router = require('express').Router();
const seedCtrl = require('../controllers/seeds.js');

router.post('/seed', seedCtrl.seedData);

module.exports = router;