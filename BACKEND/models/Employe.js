const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const EmployeScheme=new Schema({
    name:{
        type:String,
        required:true
    },
    t_number:{
        type:String,
        required:true
    }
    ,
    Address:{
        type:String,
        required:true
    }

})

const Employe=mongoose.model("Employe",EmployeScheme);
module.exports=Employe;
