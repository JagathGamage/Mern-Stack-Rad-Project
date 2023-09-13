const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const transporterScheme=new Schema({
    name:{
        type:String,
        required:true
    },
    teaWeight:{
        type:Number,
        required:true
    }
    ,
    income:{
        type:Number,
        required:true
    }

})

const Transporter=mongoose.model("Transporter",transporterScheme);
module.exports=Transporter;
