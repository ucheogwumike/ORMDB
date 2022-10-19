var express = require('express');
var router = express.Router();
const db = require('../models/index')
const {rolesController}=require('../controllers/roles')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/role',rolesController.getAll)
router.get('/role/:id',rolesController.getById)
router.post('/role',rolesController.create)
router.put('/role/:id',rolesController.update)
router.delete('/role/:id',rolesController.delete)

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


