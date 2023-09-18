import React,{useState} from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
export default function AddBuyer(){ 

    const [name,setName]=useState("");
    const [phoneNumber,setPhoneNumber]=useState("");
    const [feedback,setFeedback]=useState("");
    
    const navigate=useNavigate();
     function sendData(e){
        e.preventDefault();
       const newBuyer={
        name,
        phoneNumber,
        feedback
       }
       

       axios.post("http://localhost:8070/buyer/addBuyer",newBuyer).then(res=>{
        navigate('/buyer');
    }).catch((err)=>{
        alert(err)
       });
     }

    return(
    <div className="container" align="center">
    <form onSubmit={sendData}>
        <div className="form-group">
        <label for="name">Buyer Name</label>
        <input type="text" className="form-control" id="name" placeholder="Enter buyer Name" onChange={(e)=>{
            setName(e.target.value);
        }}/>
        </div>

        <div className="form-group">
        <label for="pnumber">Phone number</label>
        <input type="text" className="form-control" id="pnumber" placeholder="Enter mobile number" onChange={(e)=>{
            setPhoneNumber(e.target.value);
        }}/>
        </div>

        <div className="form-group">
        <label for="feedback">Buyer  feedback</label>
        <input type="text" className="form-control" id="feedback" placeholder="Enter buyer feedback" onChange={(e)=>{
            setFeedback(e.target.value);
        }}/>
        </div>
    
    
        <button type="submit" className="btn btn-success">Submit</button>
    </form> 
    </div>
    )
}