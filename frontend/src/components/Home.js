import React from "react"
import {Link} from "react-router-dom";

function Home(){
    
        const linkStyles = {
          /* Define your inline styles here */
          backgroundColor: '#3CBC8D',
          color: '#fff',
          padding: '10px 20px 10px 10px',
          fontSize: '40px',
          textDecoration: 'none',
          width:90,
          float: 'bottom'
        }
    
    return(
      
       <><><Link to="/transporter"  style={linkStyles}>
            Tea Transporter
        </Link><br/><br/><br/><Link to="" style={linkStyles}>Tea Suppliers
        </Link><br/><br/><br/></><><Link to="" style={linkStyles}>
                Make suppliers Bills
        </Link><br/><br/><br/><Link to="" style={linkStyles}>Factory Employess
                </Link></></>
    )
}
export default Home;