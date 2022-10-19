const {jwt,verify} =require('jsonwebtoken')
const config = require('../config/auth')

verifyToken = (req,res,nex)=>{
    let token = req.header['Authorization']
    if(!token){
        return res.status(401).send({
            message:'not allowed'
        })
    }
    verify(token,config.secrete,(err,decoded)=>{
        if(err){
            return res.status(401).send({
                message:'you know get ticket'
            })
        }
        
        req.userid = decoded.id
        return decoded.id
    })

} 

const jwtAuth ={
    verifyToken
}
console.log(jwtAuth.verifyToken())
module.exports = jwtAuth 