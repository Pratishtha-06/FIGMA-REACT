import React from "react";
import { useLocation } from "react-router-dom";
import Plane from '../assets/Airplane.jpg';
function Flight (){
   const location=useLocation();
   const city =location.state?.city;
   const upper =city.toUpperCase();
   const date=location.state?.date;



    return (
        <>
        <div className="details" style={{width:'80%'}}>
            <div className="back w-100 pt-2 pb-2 px-3 d-flex flex-column justify-content-between"
                 style={{backgroundColor:'#3643FB',color:'white',borderRadius:'16px',height:'124px'}}>
            
              <div className="d-flex flex-row justify-content-between">
               <div style={{fontWeight:'700'}}>       
                    Flight Details
                    <div style={{fontWeight:'400',lineHeight:'20px',fontSize:'14px'}}>{date},10:00AM</div>
               </div>
               <div style={{color:'#D1F462',textDecoration:'underline'}}>
                See all
               </div>
               </div>
            <div>
                <div style={{fontWeight:'800',color:'white',marginBottom:'5px'}}>INDIA--------->{upper}</div>
            </div>
            </div>
            
        </div>
        
        </>
    )
}
export default Flight;