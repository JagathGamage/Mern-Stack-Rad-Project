const router=require("express").Router();
const Product = require("../models/Product ");
let Student=require("../models/Product ");

router.route("/addProduct").post((req,res)=>{
    const name=req.body.name;
    const weight=Number(req.body.weight);
    const price=Number(req.body.price);

    const newProduct=new Product({
        name,
        weight,
        price
    })

    newProduct.save().then(()=>{
        res.json("Product Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Product.find().then((Products)=>{
        res.json(Products)
    }).catch((err)=>{/////////////////////////
        console.log(err)//////////////
    })
})


router.route("/Product").get((req,res)=>{
    Student.find().then((Products)=>{
        res.json(Products)
    }).catch((err)=>{
        console.log("okkkkkkk")
    })
})

router.route("/updateProduct/:id").put(async (req,res)=>{
    let userId=req.params.id;
    const {name,weight,price}=req.body;

    const updateProduct={
        name,
        weight,
        price
    }
    const update=await Product.findByIdAndUpdate(userId,updateProduct).then(()=>{
        res.status(200).send({status:"Product updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error: err.message});
    
    })
})

router.route("/deleteProduct/:id").delete(async(req,res)=>{
    let userId=req.params.id;
    await Product.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"Product deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete product",error:err.message});
    })
})
router.route("/get/:id").get(async(req,res)=>{
    let userId=req.params.id;
    try{
        const teaproduct =  await Product.findOne({_id : userId});
        if(teaproduct){
            res.status(200).json(teaproduct)
        }else{
            res.status(404).json({massage:"user not found"})
        }
    }catch(error){
        res.status(404).json(error)
    }
})
// router.route("/getProduct/:id").get(async(req,res)=>{
//     let userId=req.params.id;
//     const user=await Product.findById(userId).then((Product)=>{
//         res.status(200).send({status:"User fetched",Product})
//     }).catch(()=>{
//         console.log(err.message);
//         res.status(500).send({status:"Error with get user",error:err.message});
//     })
// })

module.exports=router;
