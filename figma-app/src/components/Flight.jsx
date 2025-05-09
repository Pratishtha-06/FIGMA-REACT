import React from "react";
import { useLocation } from "react-router-dom";


function Flight ({Usercity}){
  const location = useLocation();
  const destination = location.state?.city || "Unknown Destination";
  const date = location.state?.date || "";

  const userCity = Usercity && Usercity !== "Loading..." ? Usercity.toUpperCase() : "";
  const destCity = destination.toUpperCase();

  console.log("Usercity (current):", Usercity);
  console.log("Destination (from location.state):", destination);

   



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
                <div style={{fontWeight:'800',color:'white',marginBottom:'5px'}}>{userCity}---------{destCity}</div>
            </div>
            </div>
            
        </div>
        
        </>
    )
}
export default Flight;