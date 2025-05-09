import React, { useState } from "react";
import Image from '../assets/City.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Dates from "./Dates";
import { useLocation } from "react-router-dom";
import {useMemberContext} from './MemberContext';


function Dashboard(){
   const location=useLocation();
   const city =location.state?.city;
   const date =location.state?.date;
   const returnDate =location.state?.returnDate;
   const upper =city.toUpperCase();
   const {member} =useMemberContext();


    return (
        <div style={{width:'80%'}} >
        
        <div className="d-flex flex-row justify-content-between align-items-center my-3 me-3">
            <div>
              <h2 style={{fontFamily:'sans-serif',fontWeight:'800',margin:'0px'}}>Hello !</h2>
              <div style={{fontWeight:'500',lineHeight:'22px'}}>Ready for the trip?</div>
            </div>

        </div>
        <h3 style={{marginTop:'35px',fontSize:'18px'}}>Your upcoming trip</h3>
 
        <div className="mt-4 d-flex flex-column justify-content-center align-items-center">
         <div className="w-100">
            <img src={Image} alt="img" className="Image w-100"></img>
         </div>   
         <div className="d-flex justify-content-center flex-column" style={{position:'absolute',top:'155px'}}>
           <h3 style={{color:'white',margin:'5px 0px 0px 0px',textAlign:'center',
                       fontStyle:'italic',fontFamily:'sans-serif',fontWeight:'900',marginBottom:'0px'}}>
                      {upper}
            </h3>
            <div style={{color:'white',marginLeft:'12px',fontSize:'12px'}}>{date}---{returnDate}</div>
         </div>
         <div className="w-100">
          <Dates member={member}/>
         </div>
         
        </div>
       </div>
    )
}
export default Dashboard;