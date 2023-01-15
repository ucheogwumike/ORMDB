const Sequelize = require('sequelize')
require("dotenv").config()
const sequelize = new Sequelize("i4gfv7p2omzlcm5j","fn2s07ruvy0bbq41","kca7d3h1f55iv6vm",{
  host:'r98du2bxwqkq3shg.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  dialect:'mysql',
  pool:{
    max:5,
    min:0,
    acquire:5000,
    idle:1000
  }
})

sequelize.authenticate().then(()=>{
  console.log('DB connected')
}).catch(err=>{
  console.log('there was an error could not connect',err)
})


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./users.js')(sequelize,Sequelize)
db.roles = require('./roles.js')(sequelize,Sequelize)

db.classes = require('./classes.js')(sequelize,Sequelize)
db.students = require('./students.js')(sequelize,Sequelize)

//relationships

//one to one 
db.roles.hasOne(db.users) 
db.users.belongsTo(db.roles)

db.users.hasOne(db.students) 
db.students.belongsTo(db.users)

//one to many
db.classes.hasMany(db.students)
db.students.belongsTo(db.classes)

//many to many  
db.roles.belongsToMany(db.users,{through:'UsersRole'}) 
db.users.belongsToMany(db.roles,{through:'UsersRole'})
 
module.exports = db;