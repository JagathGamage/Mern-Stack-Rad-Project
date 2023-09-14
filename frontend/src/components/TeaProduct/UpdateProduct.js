import React,{useState,useEffect} from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
export default function UpdateProduct(){ 

    const {id}=useParams();

    const [values,setValues]=useState({
        
        name:'',
        weight:0,
        price:''
    })
    
    useEffect(()=>{
        axios.get(`http://localhost:8070/Product/get/${id}`).then(res=>{
            setValues({...values,name:res.data.name,weight:res.data.weight,price:res.data.price})
        }).catch(err=>console.log(err))
    },[])
   
    const navigate=useNavigate();

    const sendData=(e)=>{
        e.preventDefault();
        axios.put('http://localhost:8070/Product/updateProduct/'+id,values).then(res=>{
            navigate('/Product');
        }).catch(err=>console.log(err))

    }

    

    return(
    <div className="container">
    <form onSubmit={sendData}>
        <div className="form-group">
        <label for="name">Product Name</label>
        <input type="text" className="form-control" id="name" placeholder="Enter Product Name" value={values.name} onChange={(e)=>{
            setValues({...values,name:e.target.value});
        }}/>
        </div>

        <div className="form-group">
        <label for="teaWeight">Tea Packet Weight</label>
        <input type="text" className="form-control" id="teaWeight" placeholder="Enter Tea Packet weight" value={values.weight} onChange={(e)=>{
            setValues({...values,weight:e.target.value});
        }}/>
        </div>

        <div className="form-group">
        <label for="income">Product Price</label>
        <input type="text" className="form-control" id="income" placeholder="Enter Product Price"  value={values.price} onChange={(e)=>{
           setValues({...values,price:e.target.value});
        }}/>
        </div>
    
    
        <button type="submit" className="btn btn-primary">Submit</button>
    </form> 
    </div>
    )
}