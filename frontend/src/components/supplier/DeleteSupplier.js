import React,{useState,useEffect} from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
export default function UpdateSupplier(){ 

    const {id}=useParams();

    const [Suppliers,setSuppliers]=useState([]);

    useEffect(()=>{
        function getSuppliers(){
            axios.get("http://localhost:8070/supplier/").then((res)=>{
                //console.log(res.data );
                setSuppliers(res.data);
                //console.log(`jagath `,students[0]);
            }).catch((err)=>{
                alert(err.message)
            })
        }
        getSuppliers();
    })


    const navigate=useNavigate();

    const deleteData=(e)=>{
        e.preventDefault();
        axios.delete('http://localhost:8070/supplier/delete/'+id).then(res=>{
            navigate('/supplier');
        }).catch(err=>console.log(err))

    }




    const listItems = Suppliers.map(
        (element) => {
            const idd=element._id;
            if(id==idd){
                return (
                 
                    <div className='x1'>
                        <ul type="disc">
                        
                        <li>Name:   {element.name}</li>
                        <li>Total Tea Weight:    {element.teaWeight}</li>
                        <li>Income:  {element.income}</li>
                        
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