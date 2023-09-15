import React ,{useState,useEffect} from 'react';
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export default function AllBuyer(){
    
    const navigate=useNavigate();
    function create(){
        navigate('/addBuyer')

    }

    const [buyers,setBuyers]=useState([]);

    useEffect(()=>{
        function getbuyers(){
            axios.get("http://localhost:8070/buyer/buyer").then((res)=>{
                //console.log(res.data );
                setBuyers(res.data);
                //console.log(`jagath `,students[0]);
            }).catch((err)=>{
                alert(err.message)
            })
        }
        getbuyers();
    })


    const listItems = buyers.map(
        (element) => {
            const id=element._id;

            const url =`/updateBuyer/${element._id}`;
            //URL(url);
            //const url='/update';
           // const params = new URLSearchParams(url.search);
           // params.set('id', id);
           // url.search = params.toString();



            return (
                 
                <div className='x1' align="center">
                    <ul type="disc">
                    
                    <li>Company Name:   {element.companyName}</li>
                    <li>Phone Number :    {element.phoneNumber}</li>
                    <li>Feedback:  {element.feedback}</li>
                    <li className="upd">
                        <a class="nav-link actived" href={url}>Update</a>
                     </li>
                     <li className="dlt">
                        <a class="nav-link actived" href={`/deleteBuyer/${element._id}`}>Delete</a>
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
                    <button type="submit" className="btn btn-success w-5 rounded-50">Create Buyer</button>
            </form>
        </div>
    )
}