var express = require('express');
var router = express.Router();
const db = require('../models/index')
const {authController}=require('../controllers/auth')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup',authController.signup)

router.post('/signin',authController.signin)



module.exports = router;


