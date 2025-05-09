import React, { act, useState } from "react";
import Man from '../assets/man.png';
import Couple from '../assets/couple.png';
import Family from '../assets/family.png';
import Arrow from '../assets/down-arrow.png';
import { useNavigate } from "react-router-dom";
import UpArrow from '../assets/arrow-up.png';
import { useMemberContext } from "./MemberContext";

function Card1(){
  const navigate =useNavigate();
  const [city,setCity]=useState('');
  const [date,setDate]=useState('');
  const [returnDate,setReturnDate]=useState('');
  const [open,setOpen]=useState(false);
  const [error,setError]=useState('');
  const { setMember } = useMemberContext();

  const [active,setActive]=useState('');
    
  const handleClick=()=>{
    if(!city || !date ){
        setError("Please fill the Details");
    }else{
        setError('');
      navigate('/dashboard',{state:{city,date,returnDate}});
    }  
    }
  
  const openInput=()=>{
   setOpen(true);
  }
  const CloseInput=()=>{
    setOpen(false);
   }

    return (
        <>
         <div>
                <h2 className="d-flex justify-content-center align-items-center"
                    style={{fontWeight:'800',fontFamily:'sans-serif',marginBottom:'5px',lineHeight:'24px'}}>
                    Plan Your Journey,Your Way!</h2>
                <div className="d-flex justify-content-center align-items-center"
                     style={{fontFamily:'sans-serif',lineHeight:'20px'}}>
                        Let's create your personalised traveling experience
                </div>
               <div className="d-flex flex-column justify-content-center align-items-center">
                <div style={{margin:'30px 0px'}}>
                   <h3 style={{fontWeight:'700',lineHeight:'24px'}}>Where would you like to go?</h3>
                   <input placeholder="Enter Destination" 
                          className="inputBox"
                          onChange={(e)=>setCity(e.target.value)}></input>
                </div>

                <div style={{margin:'30px 0px 60px 0px',width:'360px'}}>
                   <h3 style={{fontWeight:'700',lineHeight:'24px'}}>How long will you stay?</h3>
                   
                   <div className="d-flex flex-row align-items-center">
                   <input placeholder="Select Duration" 
                          type="date" 
                          onChange={(e)=>setDate(e.target.value)}
                          className="inputBox"></input>
                    <img src={Arrow} 
                         style={{width:'15px',height:'15px',position:'absolute',marginLeft:'5px'}}
                         onClick={openInput}></img>      
                   </div>   
                  
                   {open && (
                    <>
                     <h6 className="mt-2">Return date</h6>  
                     <div className="d-flex align-items-center">
 
                     <input placeholder="Select Duration" 
                            type="date" 
                            onChange={(e)=>setReturnDate(e.target.value)}
                            className="inputBox"></input> 
                     <img src={UpArrow} 
                         style={{width:'13px',height:'13px',position:'absolute',marginLeft:'5px'}}
                         onClick={CloseInput}></img>       
                     </div> 
                     </>  
                    )}    
                </div>

                <div className="d-flex flex-column jutify-content-center align-items-center">
                   <h3 style={{fontWeight:'700',lineHeight:'24px'}}>Who are you travelling with?</h3>
                   
                   <div className="row d-flex justify-content-center align-items-center" style={{margin:'0px 3px',height:'120px'}}>

                    <div className="col-4 col-md-4 col-lg-4 Options d-flex flex-row justify-content-center align-items-center" 
                         onClick={()=>setActive('solo')} >
                        <img src={Man} style={{width:'20px',height:'20px'}}/>
                        <input  placeholder="Solo" style={{width:'100%',border:'none'}} 
                                onChange={(e)=>setMember(1)}
                                disabled={active!='solo'}/>
                    </div>
                    <div className="col-4 col-md-4 col-lg-4  Options d-flex flex-row justify-content-center align-items-center"
                          onClick={()=>setActive('couple')} >
                        <img src={Couple} style={{width:'20px',height:'20px'}}/>
                        <input  placeholder="Couple" style={{width:'100%',border:'none'}} 
                                onChange={(e)=>setMember(e.target.value)}
                                disabled={active!='couple'}/>
                    </div>
                    <div className="col-4 col-md-4 col-lg-4 Options d-flex flex-row justify-content-center align-items-center"
                           onClick={()=>setActive('family')}>
                        <img src={Family} style={{width:'20px',height:'20px'}}/>
                        <input  placeholder="Family" style={{width:'100%',border:'none'}} 
                                onChange={(e)=>setMember(e.target.value)}
                                disabled={active!='family'}/>
                    </div>
                    <div className="col-4 col-md-4 col-lg-4 Options d-flex flex-row justify-content-center align-items-center"
                           onClick={()=>setActive('friends')}>
                    <img src={Couple} style={{width:'20px',height:'20px'}}/>
                    <input  placeholder="Friends" style={{width:'100%',border:'none'}} 
                                onChange={(e)=>setMember(e.target.value)}
                                disabled={active!='friends'}/>
                    </div>
                   </div>
                </div>
              
                {error && ( <div style={{color:'red' ,fontSize:'15px'}}> {error} </div>)}
               <button onClick={handleClick}
                       className="Continue">Continue</button>
            </div>       
         </div>

        </>
    )
}
export default Card1;