module.exports =(sequelize,dataType)=>{
    const Users = sequelize.define('users',{
        firstname:{
            type: dataType.STRING,
            unique:true
        },
        lastname:{
            type: dataType.STRING
            // validate:{
            //     len:{
            //         args:[1,25],
            //         msg:'must be more than 1 and less than 25'
            //     }
            //}
        },
        email:{
            type: dataType.STRING,
            unique:true
        },
        password:{
            type:dataType.STRING,
            //allownull:false
        }
})

    return Users
}

/*
 const {Sequelize,DataType,Model = require('sequelize')
const sequelize = new Sequelize()

class User extends Model;
User.init({
// Model attributes are defined here
firstName: {
type: DataTypes.STRING,
allowNull: false
},
lastName: {
type: DataTypes.STRING
// allowNull defaults to true
}
}, {
// Other model options go here
sequelize, // We need to pass the connection instance
modelName: 'User' // We need to choose the model name
});
 */

    