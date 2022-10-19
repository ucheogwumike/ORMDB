module.exports =(sequelize,dataType)=>{
    const Students = sequelize.define('students',{
        studentdepartment:{
            type: dataType.STRING
        }
        
})

    return Students
}