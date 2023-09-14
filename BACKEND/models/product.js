const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const ProductScheme=new Schema({
    name:{
        type:String,
        required:true
    },
    weight:{
        type:Number,
        required:true
    }
    ,
    price:{
        type:Number,
        required:true
    }

})

const Product=mongoose.model("Product",ProductScheme);
module.exports=Product;
