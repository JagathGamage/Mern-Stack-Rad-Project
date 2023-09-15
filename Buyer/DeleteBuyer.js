import React,{useState,useEffect} from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
export default function updateBuyer(){ 

    const {id}=useParams();

    const [buyers,setBuyers]=useState([]);

    useEffect(()=>{
        function getbuyers(){
            axios.get("http://localhost:8070/buyer/").then((res)=>{
                //console.log(res.data );
                setBuyers(res.data);
                //console.log(`jagath `,students[0]);
            }).catch((err)=>{
                alert(err.message)
            })
        }
        getbuyers();
    })


    const navigate=useNavigate();

    const deleteData=(e)=>{
        e.preventDefault();
        axios.delete('http://localhost:8070/buyer/deleteBuyer/'+id).then(res=>{
            navigate('/buyer');
        }).catch(err=>console.log(err))

    }




    const listItems = buyers.map(
        (element) => {
            const idd=element._id;
            if(id==idd){
                return (
                 
                    <div className='x1'>
                        <ul type="disc">
                        
                        <li>Company Name:   {element.name}</li>
                    <li> Phone Number:   {element.pname}</li>
                        <li>Feedback:    {element.fdback}</li>
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