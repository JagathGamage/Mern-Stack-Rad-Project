import React ,{useState,useEffect} from 'react';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function AllProduct(){


    const navigate=useNavigate();
    function create(){
        navigate('/addProduct')

    }

    const [Products,setProducts]=useState([]);

    useEffect(()=>{
        function getProducts(){
            axios.get("http://localhost:8070/Product/Product").then((res)=>{
                //console.log(res.data );
                setProducts(res.data);
                //console.log(`jagath `,students[0]);
            }).catch((err)=>{
                alert(err.message)
            })
        }
        getProducts();
    })


    const listItems = Products.map(
        (element) => {
            const id=element._id;

            const url =`/updateProduct/${element._id}`;
            //URL(url);
            //const url='/update';
           // const params = new URLSearchParams(url.search);
           // params.set('id', id);
           // url.search = params.toString();



            return (
                 
                <div className='x1'>
                    <ul type="disc">
                    
                    <li>Product Name:   {element.name}</li>
                    <li>Tea Packet Weight :    {element.weight}</li>
                    <li>Tea Packet Price:  {element.price}</li>
                    <li className="upd">
                        <a class="nav-link actived" href={url}>Update</a>
                     </li>
                     <li className="dlt">
                        <a class="nav-link actived" href={`/deleteProduct/${element._id}`}>Delete</a>
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
                    <button type="submit" className="btn btn-success w-5 rounded-50">Create Product</button>
            </form>
        </div>
    )
}