import React,{useState} from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
export default function AddTransporter(){ 

    const [name,setName]=useState("");
    const [teaWeight,setTeaWeight]=useState("");
    const [income,setIncome]=useState("");
    
    const navigate=useNavigate();
     function sendData(e){
        e.preventDefault();
       const newTransporter={
        name,
        teaWeight,
        income
       }
       

       axios.post("http://localhost:8070/transporter/add",newTransporter).then(res=>{
        navigate('/transporter');
    }).catch((err)=>{
        alert(err)
       });
     }

    return(
    <div className="container" align="center">
    <form onSubmit={sendData}>
        <div className="form-group">
        <label for="name">Transporter Name</label>
        <input type="text" className="form-control" id="name" placeholder="Enter Transporter Name" onChange={(e)=>{
            setName(e.target.value);
        }}/>
        </div>

        <div className="form-group">
        <label for="teaWeight">Total Tea Weight</label>
        <input type="text" className="form-control" id="teaWeight" placeholder="Enter Total Tea Weight" onChange={(e)=>{
            setTeaWeight(e.target.value);
        }}/>
        </div>

        <div className="form-group">
        <label for="income">Transporter Monthly Income</label>
        <input type="text" className="form-control" id="income" placeholder="Enter Transporter Income" onChange={(e)=>{
            setIncome(e.target.value);
        }}/>
        </div>
    
    
        <button type="submit" className="btn btn-success">Submit</button>
    </form> 
    </div>
    )
}