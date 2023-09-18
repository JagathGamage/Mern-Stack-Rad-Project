const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const buyerScheme=new Schema({
    companyName:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    }
    ,
    feedback:{
        type:String,
        required:true
    }

})

const Buyer=mongoose.model("Buyer",buyerScheme);
module.exports=Buyer;
