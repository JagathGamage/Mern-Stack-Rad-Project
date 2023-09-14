import React ,{useState,useEffect} from 'react';
import axios from "axios";

export default function AllEmploye(){

    const [Employes,setEmployes]=useState([]);

    useEffect(()=>{
        function getEmployes(){
            axios.get("http://localhost:8070/Employe/Employes").then((res)=>{
                //console.log(res.data );
                setEmployes(res.data);
                //console.log(`Imalka `,students[0]);
            }).catch((err)=>{
                alert(err.message)
            })
        }
        getEmployes();
    })


    const listItems = Employes.map(
        (element) => {
            const id=element._id;

            const url =`/updateEmploye/${element._id}`;
            //URL(url);
            //const url='/update';
           // const params = new URLSearchParams(url.search);
           // params.set('id', id);
           // url.search = params.toString();



            return (
                 
                <div className='x1'>
                    <ul type="disc">
                    
                    <li>Name:   {element.name}</li>
                    <li>Telephone Number :    {element.t_number}</li>
                    <li>Address:  {element.Address}</li>
                    <li className="nav-item">
                        <a class="nav-link actived" href={url}>Update</a>
                     </li>
                     <li className="nav-item">
                        <a class="nav-link actived" href={`/deleteEmploye/${element._id}`}>Delete</a>
                     </li>
                </ul>
                </div>
                
            )
        }
    )

    return(
        <div>
           {listItems}
        </div>
    )
}