const router=require("express").Router();
const Employe = require("../models/Employe");
let Student=require("../models/Employe");

router.route("/add").post(async (req,res)=>{
    const name=req.body.name;
    const t_number=Number(req.body.t_number);
    const Address=req.body.Address;
    

    const newEmploye=new Employe({
        name,
        t_number,
        Address
    })
    console.log(newEmploye);
    await newEmploye.save().then(()=>{
        res.json("Employe Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Employe.find().then((Employes)=>{
        res.json(Employes)
    }).catch((err)=>{/////////////////////////
        console.log(err)//////////////
    })
})


router.route("/Employes").get(async (req,res)=>{
    // console.log("Called")
    await Student.find().then((Employes)=>{
        res.json(Employes)
    }).catch((err)=>{
        console.log("okkkkkkk")
    })
})

router.route("/updateEmploye/:id").put(async (req,res)=>{
    let userId=req.params.id;
    const {name,t_number,Address}=req.body;
    console.log(userId)

    const updateEmploye={
        name,
        t_number,
        Address
    }
    const update=await Employe.findByIdAndUpdate(userId,updateEmploye).then(()=>{
        res.status(200).send({status:"USer updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error: err.message});
    
    })
})

router.route("/deleteEmploye/:id").delete(async(req,res)=>{
    let userId=req.params.id;
    await Employe.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"User deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete user",error:err.message});
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let userId=req.params.id;
    console.log(userId)
    try {
        const user = await Employe.findOne({_id : userId})
        console.log(user)
        res.status(200).send({user})
    } catch (error) {
        
    }
    // const user=await Employe.findOne({_id : userId}).then((Employe)=>{
    //     console.log(user)
    //     res.status(200).send({status:"User fetched",Employe})
    // }).catch(()=>{
    //     console.log(err.message);
    //     res.status(500).send({status:"Error with get user",error:err.message});
    // })
})

module.exports=router;
