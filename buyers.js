const router=require("express").Router();
const Buyer = require("../models/buyer");
let Student=require("../models/buyer");

router.route("/addBuyer").post((req,res)=>{
    const companyName=req.body.companyName;
    const phoneNumber=req.body.phoneNumber;
    const feedback=req.body.feedback;

    const newBuyer=new Buyer({
        companyName,
        phoneNumber,
        feedback
    })

    newBuyer.save().then(()=>{
        res.json("buyer Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Buyer.find().then((buyers)=>{
        res.json(buyers)
    }).catch((err)=>{/////////////////////////
        console.log(err)//////////////
    })
})


router.route("/buyer").get((req,res)=>{
    Buyer.find().then((buyers)=>{
        res.json(buyers)
    }).catch((err)=>{
        console.log("okkkkkkk")
    })
})

router.route("/updateBuyer/:id").put(async (req,res)=>{
    let userId=req.params.id;
    const {companyName,phoneNumber,feedback}=req.body;

    const updateBuyer={
        companyName,
        phoneNumber,
        feedback
    }
    const update=await Buyer.findByIdAndUpdate(userId,updateBuyer).then(()=>{
        res.status(200).send({status:"USer updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error: err.message});
    
    })
})

router.route("/deleteBuyer/:id").delete(async(req,res)=>{
    let userId=req.params.id;
    await Buyer.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"User deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete user",error:err.message});
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let userId=req.params.id;
    try{
        const byr = await Buyer.findOne({_id : userId});
        if(byr){
            res.status(200).json(byr)
        }else{
            res.status(404).json({massage:"user not found"})
        }
    }catch(error){
        res.status(404).json(error)
    }
})

// router.route("/getBuyer/:id").get(async(req,res)=>{
//     let userId=req.params.id;
//     const user=await buyer.findById(userId).then((buyer)=>{
//         res.status(200).send({status:"User fetched",buyer})
//     }).catch(()=>{
//         console.log(err.message);
//         res.status(500).send({status:"Error with get user",error:err.message});
//     })
// })

module.exports=router;
