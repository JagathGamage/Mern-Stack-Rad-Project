import React ,{useState,useEffect} from 'react';
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export default function AllTransporter(){
    
    const navigate=useNavigate();
    function create(){
        navigate('/add')

    }

    const [transporters,setTransporters]=useState([]);

    useEffect(()=>{
        function getTransporters(){
            axios.get("http://localhost:8070/transporter/transporter").then((res)=>{
                //console.log(res.data );
                setTransporters(res.data);
                //console.log(`jagath `,students[0]);
            }).catch((err)=>{
                alert(err.message)
            })
        }
        getTransporters();
    })


    const listItems = transporters.map(
        (element) => {
            const id=element._id;

            const url =`/update/${element._id}`;
            //URL(url);
            //const url='/update';
           // const params = new URLSearchParams(url.search);
           // params.set('id', id);
           // url.search = params.toString();



            return (
                 
                <div className='x1' align="center">
                    <ul type="disc">
                    
                    <li>Name:   {element.name}</li>
                    <li>Total Tea Weight :    {element.teaWeight}</li>
                    <li>Income:  {element.income}</li>
                    <li className="nav-item">
                        <a class="nav-link actived" href={url}>Update</a>
                     </li>
                     <li className="nav-item">
                        <a class="nav-link actived" href={`/delete/${element._id}`}>Delete</a>
                     </li>
                </ul>
                </div>
                
            )
        }
    )

    return(
        <div>
            {listItems}
            <form onSubmit={create}>
                    <button type="submit" className="btn btn-success w-5 rounded-50">Create Transporter</button>
            </form>
        </div>
    )
}