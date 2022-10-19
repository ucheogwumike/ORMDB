var express = require('express');
var router = express.Router();
const db = require('../models/index')
const {usersController}=require('../controllers/users')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/user',usersController.getAll)
router.get('/user/:id',usersController.getById)
router.post('/user',usersController.create)
router.put('/user/:id',usersController.update)
router.delete('/user/:id',usersController.delete)

// router.get('/user',async(req,res)=>{
//   const user = await db.users.findAll()
//   res.send(user)

// })

// router.get('/user:id',async(req,res)=>{

//   const user = await db.users.findone({where:req.params.id})
//   res.send(user)

// })

// router.post('/register',async(req,res)=>{
//  let {firstname,lastname,email}=req.body
//  const userNames = await db.users.create({
//   firstname,
//   lastname,
//   email
//  })
//  res.send(userNames)
//   console.log( userNames)
// })

module.exports = router;


