const db = require('../models/index')
const roles = db.roles;

exports.rolesController ={
    create:(req,res)=>{
        const role = req.body
        roles.create(role).then(data=>{
            res.status(200).send(data)
        }).catch(err=>{
            console.log(err)
        })
    },
    getAll:(req,res)=>{
        roles.findAll().then(data=>{
            res.status(200).send(data)
        })

    },
    getById:(req,res)=>{
        roles.findOne({
            where:{
                id:req.params.id
            }
        }).then(data=>{
            res.status(200).send(data)
        }).catch(err=>{
            console.log(err)
        })

    },update:(req,res)=>{
        const role = req.body
        roles.update(role,{
            where:{
                id:req.params.id
            }
        }).then(data=>{
            res.status(200).send(data)
        }).catch(err=>{
            console.log(err)
        })

    },delete:(req,res)=>{
        roles.destroy({
            where:{
                id:req.params.id
            }
        }).then(data=>{
            res.status(200).json({display:data})
        }).catch(err=>{
            console.log(err)
        })

    }
}