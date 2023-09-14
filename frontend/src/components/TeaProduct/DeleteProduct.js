import React,{useState,useEffect} from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
export default function UpdateProduct(){ 

    const {id}=useParams();

    const [Products,setProduct]=useState([]);

    useEffect(()=>{
        function getProducts(){
            axios.get("http://localhost:8070/Product/").then((res)=>{
                //console.log(res.data );
                setProduct(res.data);
                //console.log(`jagath `,students[0]);
            }).catch((err)=>{
                alert(err.message)
            })
        }
        getProducts();
    })


    const navigate=useNavigate();

    const deleteData=(e)=>{
        e.preventDefault();
        axios.delete('http://localhost:8070/Product/deleteProduct/'+id).then(res=>{
            navigate('/Product');
        }).catch(err=>console.log(err))

    }




    const listItems = Products.map(
        (element) => {
            const idd=element._id;
            if(id==idd){
                return (
                 
                    <div className='x1'>
                        <ul type="disc">
                        
                        <li>Product Name:   {element.name}</li>
                        <li>Tea Packet Weight:    {element.weight}</li>
                        <li>Tea Packet Price:  {element.price}</li>
                        
                    </ul>
                    </div>
                    
                )

            }            
        }
    )

    

    return(
       
    <div className="container">
        {listItems}
        <div className="container-1">
            <form onSubmit={deleteData}>
                <button type="submit" className="btn btn-danger">Confirm Deletion</button>
            </form>
        </div>
     
    </div>
    )
}