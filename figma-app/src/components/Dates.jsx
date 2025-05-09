import React from "react";
import {useLocation} from 'react-router-dom';
import { differenceInCalendarDays } from "date-fns";
import Clock from '../assets/clock.png';
import Activity from '../assets/online-activity.png';
import { useMemberContext } from "./MemberContext";


function Dates(){
  const location=useLocation();
  const date =location.state?.date;
  const returnDate =location.state?.returnDate;
  const Day = differenceInCalendarDays(new Date(returnDate),new Date(date));
  const {member}=useMemberContext;

  
    return (
        <>
         <div className="d-flex flex-row justify-content-evenly w-100" style={{position:'relative',bottom:'55px',color:'white'}} >
          <div>
              <div className="d-flex flex-row justify-content-center align-items-center"
                    style={{fontSize:'13px'}}>
                <img src={Clock} style={{width:'15px',height:'15px',marginRight:'5px'}}/>
                {Day} Days 
              </div>
              <div style={{textAlign:'center',fontSize:'13px'}}>Duration</div>  
          </div>

          <div>
              <div className="d-flex flex-row justify-content-center align-items-center"
                    style={{fontSize:'13px'}}>
                <img src={Clock} style={{width:'15px',height:'15px',marginRight:'5px'}}/>
                {member} Members
              </div>
              <div style={{textAlign:'center',fontSize:'13px'}}>Group Size</div>  
          </div>

          <div>
              <div className="d-flex flex-row justify-content-center align-items-center"
                    style={{fontSize:'13px'}}>
                <img src={Activity} style={{width:'15px',height:'15px',marginRight:'5px'}}/>
                14
              </div>
              <div style={{textAlign:'center',fontSize:'13px'}}>Activities</div>  
          </div>
         </div>
        
        </>
    )
}
export default Dates;