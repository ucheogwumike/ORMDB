module.exports =(sequelize,dataType)=>{
    const Roles = sequelize.define('roles',{
        rolename:{
            type: dataType.STRING
        },
        roleDescription:{
            type: dataType.STRING
            // validate:{
            //     len:{
            //         args:[1,25],
            //         msg:'must be more than 1 and less than 25'
            //     }
            //}
        }
        
})

    return Roles
}