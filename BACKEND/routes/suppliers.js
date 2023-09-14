const router=require("express").Router();
const Supplier = require("../models/Suppliers");
let Student=require("../models/Suppliers");

router.route("/add").post((req,res)=>{
    const name=req.body.name;
    const teaWeight=Number(req.body.teaWeight);
    const income=Number(req.body.income);

    const newSupplier=new Supplier({
        name,
        teaWeight,
        income
    })

    newSupplier.save().then(()=>{
        res.json("Supplier Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Supplier.find().then((Suppliers)=>{
        res.json(Suppliers)
    }).catch((err)=>{/////////////////////////
        console.log(err)//////////////
    })
})


router.route("/Supplier").get((req,res)=>{
    Student.find().then((Suppliers)=>{
        res.json(Suppliers)
    }).catch((err)=>{
        console.log("okkkkkkk")
    })
})

router.route("/update/:id").put(async (req,res)=>{
    let userId=req.params.id;
    const {name,teaWeight,income}=req.body;

    const updateSupplier={
        name,
        teaWeight,
        income
    }
    const update=await Supplier.findByIdAndUpdate(userId,updateSupplier).then(()=>{
        res.status(200).send({status:"USer updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error: err.message});
    
    })
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userId=req.params.id;
    await Supplier.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"User deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete user",error:err.message});
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let userId=req.params.id;
    const user=await Supplier.findById(userId).then((Supplier)=>{
        res.status(200).send({status:"User fetched",Supplier})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get user",error:err.message});
    })
})

module.exports=router;
