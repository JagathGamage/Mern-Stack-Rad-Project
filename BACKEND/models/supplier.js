const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const supplierScheme=new Schema({
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

const Supplier=mongoose.model("Supplier",supplierScheme);
module.exports=Supplier;
