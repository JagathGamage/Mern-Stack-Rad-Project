import React,{useState,useEffect} from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
export default function UpdateBuyer(){ 

    const {id}=useParams();

    const [values,setValues]=useState({
        
        companyName:'',
        phoneNumber:0,
        feedback:''
    })
    
    useEffect(()=>{
        axios.get(`http://localhost:8070/buyer/get/${id}`).then(res=>{
            setValues({...values,companyName:res.data.companyName,pnumber:res.data.phoneNumber,feedback:res.data.feedback})
        }).catch(err=>console.log(err))
    },[])
   
    const navigate=useNavigate();

    const sendData=(e)=>{
        e.preventDefault();
        axios.put('http://localhost:8070/buyer/updateBuyer/'+id,values).then(res=>{
            navigate('/buyer');
        }).catch(err=>console.log(err))

    }

    

    return(
    <div className="container">
    <form onSubmit={sendData}>
        <div className="form-group">
        <label for="name">Company Name</label>
        <input type="text" className="form-control" id="name" placeholder="Enter buyer Name" value={values.companyName} onChange={(e)=>{
            setValues({...values,companyName:e.target.value});
        }}/>
        </div>

        <div className="form-group">
        <label for="pnumber">Phone Number</label>
        <input type="text" className="form-control" id="pnumber" placeholder="Enter Phone numbert" value={values.phoneNumber} onChange={(e)=>{
            setValues({...values,phoneNumber:e.target.value});
        }}/>
        </div>

        <div className="form-group">
        <label for="income">Feedback</label>
        <input type="text" className="form-control" id="income" placeholder="Enter Feedback"  value={values.feedback} onChange={(e)=>{
           setValues({...values,feedback:e.target.value});
        }}/>
        </div>
    
    
        <button type="submit" className="btn btn-success">Submit</button>
    </form> 
    </div>
    )
}