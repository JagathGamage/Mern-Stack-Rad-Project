import React,{useState,useEffect} from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
export default function UpdateTransporter(){ 

    const {id}=useParams();

    const [transporters,setTransporters]=useState([]);

    useEffect(()=>{
        function getTransporters(){
            axios.get("http://localhost:8070/transporter/").then((res)=>{
                //console.log(res.data );
                setTransporters(res.data);
                //console.log(`jagath `,students[0]);
            }).catch((err)=>{
                alert(err.message)
            })
        }
        getTransporters();
    })


    const navigate=useNavigate();

    const deleteData=(e)=>{
        e.preventDefault();
        axios.delete('http://localhost:8070/transporter/delete/'+id).then(res=>{
            navigate('/transporter');
        }).catch(err=>console.log(err))

    }




    const listItems = transporters.map(
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