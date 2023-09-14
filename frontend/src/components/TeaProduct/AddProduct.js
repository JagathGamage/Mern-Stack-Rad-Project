import React,{useState} from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
export default function AddProduct(){ 

    const [name,setName]=useState("");
    const [weight,setWeight]=useState("");
    const [price,setPrice]=useState("");
    
    const navigate=useNavigate();
     function sendData(e){
        e.preventDefault();
       const newProduct={
        name,
        weight,
        price
       }
       

       axios.post("http://localhost:8070/Product/addProduct",newProduct).then(res=>{
        navigate('/Product');
    }).catch((err)=>{
        alert(err)
       });
     }

    return(
    <div className="container">
    <form onSubmit={sendData}>
        <div className="form-group">
        <label for="name">Product Name</label>
        <input type="text" className="form-control" id="name" placeholder="Enter Product Name" onChange={(e)=>{
            setName(e.target.value);
        }}/>
        </div>

        <div className="form-group">
        <label for="weight">Weight of a Packet</label>
        <input type="text" className="form-control" id="weight" placeholder="Enter Tea Packet Weight" onChange={(e)=>{
            setWeight(e.target.value);
        }}/>
        </div>

        <div className="form-group">
        <label for="price">Product Price</label>
        <input type="text" className="form-control" id="income" placeholder="Enter Product Price" onChange={(e)=>{
            setPrice(e.target.value);
        }}/>
        </div>
    
    
        <button type="submit" className="btn btn-primary">Submit</button>
    </form> 
    </div>
    )
}