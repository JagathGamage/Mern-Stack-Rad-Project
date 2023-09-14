import React,{useState} from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
export default function Addsupplier(){ 

    const [name,setName]=useState("");
    const [teaWeight,setTeaWeight]=useState("");
    const [income,setIncome]=useState("");
    
    const navigate=useNavigate();
     function sendData(e){
        e.preventDefault();
       const newSupplier={
        name,
        teaWeight,
        income
       }
       

       axios.post("http://localhost:8070/Supplier/add",newSupplier).then(res=>{
        navigate('/Supplier');
    }).catch((err)=>{
        alert(err)
       });
     }

    return(
    <div className="container">
    <form onSubmit={sendData}>
        <div className="form-group">
        <label for="name">SupplierName</label>
        <input type="text" className="form-control" id="name" placeholder="Enter SupplierName" onChange={(e)=>{
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
        <label for="income">Supplier Monthly Income</label>
        <input type="text" className="form-control" id="income" placeholder="Enter Supplier Income" onChange={(e)=>{
            setIncome(e.target.value);
        }}/>
        </div>
    
    
        <button type="submit" className="btn btn-primary">Submit</button>
    </form> 
    </div>
    )
}