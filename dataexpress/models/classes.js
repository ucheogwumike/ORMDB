module.exports =(sequelize,dataType)=>{
    const Classes = sequelize.define('classes',{
        classname:{
            type: dataType.STRING
        }
        
})

    return Classes
}