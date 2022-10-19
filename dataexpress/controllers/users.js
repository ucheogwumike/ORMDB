const db = require('../models/index')
const users = db.users;
const {constants}=require('./constants')

exports.usersController ={
    create:(req,res)=>{ 
        const user = req.body
        users.create(user).then(data=>{
            res.status(200).send(data)
        }).catch(err=>{
            constants.handleError(err,res)
        })
    },
    getAll:(req,res)=>{
        users.findAll().then(data=>{
            res.status(200).send(data)
        }).catch(err=>{
                constants.handleError(err,res)
    } )

    },
    getById:(req,res)=>{
        users.findOne({
            where:{
                id:req.params.id
            }
        }).then(data=>{
            // if(data == undefined){
            //     res.status(404).send({
            //         message:'not found'
            //     })
            // }
            res.status(200).send(data)
        }).catch(err=>{
            constants.handleError(err,res)
            //console.log(err)
        })

    },update:(req,res)=>{
        const user = req.body
        users.update(user,{
            where:{
                id:req.params.id
            }
        }).then(data=>{
            // if(data[0] !==1){
            //     res.status(404).json(
            //         {
            //             message:"record not found"
            //         }
            //     )
            // }
            res.status(200).send(data)
        }).catch(err=>{
            constants.handleError(err,res)
           //console.log(err)
        })

    },delete:(req,res)=>{
        users.destroy({
            where:{
                id:req.params.id
            }
        }).then(data=>{
            res.status(200).send(data)
        }).catch(err=>{
            constants.handleError(err,res)
        })

    }
}