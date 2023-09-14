import React,{useState} from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
export default function AddEmploye(){ 

    const [name,setName]=useState("");
    const [t_number,setnumber]=useState("");
    const [Address,setAddress]=useState("");
    
    const navigate=useNavigate();
     function sendData(e){
        e.preventDefault();
       const newEmploye={
        name,
        t_number,
        Address
       }
       

       axios.post("http://localhost:8070/Employe/add",newEmploye).then(res=>{
        navigate('/Employe');
    }).catch((err)=>{
        alert(err)
       });
     }

    return(
    <div className="container">
    <form onSubmit={sendData}>
        <div className="form-group">
        <label for="name">Employe Name</label>
        <input type="text" className="form-control" id="name" placeholder="Enter Employe Name" onChange={(e)=>{
            setName(e.target.value);
        }}/>
        </div>

        <div className="form-group">
        <label for="t_number">Telephone Number</label>
        <input type="text" className="form-control" id="t_number" placeholder="Enter Telephone Number" onChange={(e)=>{
            setnumber(e.target.value);
        }}/>
        </div>

        <div className="form-group">
        <label for="Address">Employe Address</label>
        <input type="text" className="form-control" id="Address" placeholder="Enter Employe Address" onChange={(e)=>{
            setAddress(e.target.value);
        }}/>
        </div>
    
    
        <button type="submit" className="btn btn-primary">Submit</button>
    </form> 
    </div>
    )
}