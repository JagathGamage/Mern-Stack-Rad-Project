const router=require("express").Router();
const Transporter = require("../models/transporter");
let Student=require("../models/transporter");

router.route("/add").post((req,res)=>{
    const name=req.body.name;
    const teaWeight=Number(req.body.teaWeight);
    const income=Number(req.body.income);

    const newTransporter=new Transporter({
        name,
        teaWeight,
        income
    })

    newTransporter.save().then(()=>{
        res.json("Transporter Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Transporter.find().then((transporters)=>{
        res.json(transporters)
    }).catch((err)=>{/////////////////////////
        console.log(err)//////////////
    })
})


router.route("/transporter").get((req,res)=>{
    Student.find().then((transporters)=>{
        res.json(transporters)
    }).catch((err)=>{
        console.log("okkkkkkk")
    })
})

router.route("/update/:id").put(async (req,res)=>{
    let userId=req.params.id;
    const {name,teaWeight,income}=req.body;

    const updateTransporter={
        name,
        teaWeight,
        income
    }
    const update=await Transporter.findByIdAndUpdate(userId,updateTransporter).then(()=>{
        res.status(200).send({status:"USer updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error: err.message});
    
    })
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userId=req.params.id;
    await Transporter.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"User deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete user",error:err.message});
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let userId=req.params.id;
    const user=await Transporter.findById(userId).then((transporter)=>{
        res.status(200).send({status:"User fetched",transporter})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get user",error:err.message});
    })
})

module.exports=router;
