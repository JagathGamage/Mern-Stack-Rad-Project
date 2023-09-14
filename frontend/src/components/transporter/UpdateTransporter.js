import React,{useState,useEffect} from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
export default function UpdateTransporter(){ 

    const {id}=useParams();

    const [values,setValues]=useState({
        
        name:'',
        teaWeight:0,
        income:''
    })
    
    useEffect(()=>{
        axios.get('http://localhost:8070/transporter/'+id).then(res=>{
            setValues({...values,name:res.data.name,teaWeight:res.data.teaWeight,income:res.data.income})
        }).catch(err=>console.log(err))
    },[])
   
    const navigate=useNavigate();

    const sendData=(e)=>{
        e.preventDefault();
        axios.put('http://localhost:8070/transporter/update/'+id,values).then(res=>{
            navigate('/transporter');
        }).catch(err=>console.log(err))

    }

    

    return(
    <div className="container">
    <form onSubmit={sendData}>
        <div className="form-group">
        <label for="name">Transporter Name</label>
        <input type="text" className="form-control" id="name" placeholder="Enter Transporter Name" value={values.name} onChange={(e)=>{
            setValues({...values,name:e.target.value});
        }}/>
        </div>

        <div className="form-group">
        <label for="teaWeight">Total Tea Weight</label>
        <input type="text" className="form-control" id="teaWeight" placeholder="Enter Total Tea weight" value={values.teaWeight} onChange={(e)=>{
            setValues({...values,teaWeight:e.target.value});
        }}/>
        </div>

        <div className="form-group">
        <label for="income">Transporter Income</label>
        <input type="text" className="form-control" id="income" placeholder="Enter Transporter Income"  value={values.income} onChange={(e)=>{
           setValues({...values,income:e.target.value});
        }}/>
        </div>
    
    
        <button type="submit" className="btn btn-success">Submit</button>
    </form> 
    </div>
    )
}