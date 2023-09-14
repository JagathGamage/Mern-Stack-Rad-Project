import React ,{useState,useEffect} from 'react';
import axios from "axios";

export default function AllSupplier(){

    const [Suppliers,setSuppliers]=useState([]);

    useEffect(()=>{
        function getSuppliers(){
            axios.get("http://localhost:8070/supplier/supplier").then((res)=>{
                //console.log(res.data );
                setSuppliers(res.data);
                //console.log(`jagath `,students[0]);
            }).catch((err)=>{
                alert(err.message)
            })
        }
        getSuppliers();
    })


    const listItems = Suppliers.map(
        (element) => {
            const id=element._id;

            const url =`/update/${element._id}`;
            //URL(url);
            //const url='/update';
           // const params = new URLSearchParams(url.search);
           // params.set('id', id);
           // url.search = params.toString();



            return (
                 
                <div className='x1'>
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
        </div>
    )
}