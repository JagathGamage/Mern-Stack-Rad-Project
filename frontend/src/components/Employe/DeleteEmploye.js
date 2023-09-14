import React,{useState,useEffect} from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
export default function UpdateEmploye(){ 

    const {id}=useParams();

    const [Employes,setEmployes]=useState([]);

    useEffect(()=>{
        function getEmployes(){
            axios.get("http://localhost:8070/Employe/").then((res)=>{
                //console.log(res.data );
                setEmployes(res.data);
                //console.log(`imalka `,students[0]);
            }).catch((err)=>{
                alert(err.message)
            })
        }
        getEmployes();
    })


    const navigate=useNavigate();

    const deleteData=(e)=>{
        e.preventDefault();
        axios.delete('http://localhost:8070/Employe/deleteEmploye/'+id).then(res=>{
            navigate('/Employe');
        }).catch(err=>console.log(err))

    }




    const listItems = Employes.map(
        (element) => {
            const idd=element._id;
            if(id==idd){
                return (
                 
                    <div className='x1'>
                        <ul type="disc">
                        
                        <li>Name:   {element.name}</li>
                        <li>Telephone Number:    {element.t_numbert}</li>
                        <li>Address:  {element.Address}</li>
                        
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