const db = require('../models/index')
const bcrypt = require("bcryptjs");
const { sign } = require('jsonwebtoken');
const users = db.users;
const config = require('../config/auth')
//const mid = require("../middleware/auth")

exports.authController ={
    signup:(req,res)=>{
        const user = req.body
        user.password = bcrypt.hashSync(user.password,12)

        users.create(user).then(data=>{
            res.status(200).send(data)
        }).catch(err=>{
            console.log(err)
        })
    },
    signin:(req,res)=>{
        users.findOne({
            where:{
                firstname:req.body.firstname
            }
        }).then(user=>{
            if(!user){
                return res.status(401).send({
                    message:"invalid name or password"
                })
            }//compare the passwords 
            
            let isValidPassword = bcrypt.compareSync(req.body.password,user.password);

            if(!isValidPassword){
                return res.status(401).send({
                    message:"invalid password"
                })
            }

            let payload ={
                id:user.id,
                firstname:user.firstname
            } 
            
            let token = sign(payload,config.secrete,{
                    expiresIn:36000
            })

            //study later 
          // mid.verifyToken(req,res)
            
            
            res.status(200).send({
                accessToken: token
            })

        }).catch(err=>{
            res.status(401).send({
                message:err.message||'something has gone wrong'
            })
        })

    }
    //forgotpassword:()
    
}