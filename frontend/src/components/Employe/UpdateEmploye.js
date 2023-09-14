import React,{useState,useEffect} from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
export default function UpdateEmploye(){ 

    const {id}=useParams(); 

    const [values,setValues]=useState({
        
        name:'',
        t_number:'',
        Address:''
    })
    
    useEffect(()=>{
        axios.get(`http://localhost:8070/Employe/get/${id}`).then(res=>{
            setValues({...values,name:res.data.user.name,t_number:res.data.user.t_number,Address:res.data.user.Address})
            // console.log(res.data.user.name)
        }).catch(err=>console.log(err))
    },[])
   
    const navigate=useNavigate();

    const sendData=(e)=>{
        e.preventDefault();
        axios.put('http://localhost:8070/Employe/updateEmploye/'+id,values).then(res=>{
            navigate('/Employe');
        }).catch(err=>console.log(err))

    }

    

    return(
    <div className="container">
    <form onSubmit={sendData}>
        <div className="form-group">
        <label for="name">Employe Name</label>
        <input type="text" className="form-control" id="name" placeholder="Enter Employe Name" value={values.name} onChange={(e)=>{
            setValues({...values,name:e.target.value});
        }}/>
        </div>

        <div className="form-group">
        <label for="t_number">Telephone Number</label>
        <input type="text" className="form-control" id="t_number" placeholder="Enter Telephone Nummber" value={values.t_number} onChange={(e)=>{
            setValues({...values,t_number:e.target.value});
        }}/>
        </div>

        <div className="form-group">
        <label for="Address">Employe Address</label>
        <input type="text" className="form-control" id="Address" placeholder="Enter Employe Address"  value={values.Address} onChange={(e)=>{
           setValues({...values,Address:e.target.value});
        }}/>
        </div>
    
    
        <button type="submit" className="btn btn-primary">Submit</button>
    </form> 
    </div>
    )
}