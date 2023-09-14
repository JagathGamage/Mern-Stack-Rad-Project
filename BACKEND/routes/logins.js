const router=require("express").Router();
const express =require("express")
let Login=require("../models/login");

const app=express()


app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    Login.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})

app.post('/register',(req,res)=>{
   Login.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

module.exports=app;