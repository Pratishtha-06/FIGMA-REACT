import React from "react";
import Bye from '../assets/goodbye.png';
import rhombus from '../assets/rhombus.png';
import Slash from '../assets/slash.png';

function AllScreen({onClick,open}){

    
    return (
        <>
        {!open && (
      <div style={{margin:'10px 5px 0px 0px',borderBottom:'1px solid rgb(151, 148, 148)',
                 padding:'0px 0px 10px 5px',width:'100%'}}>

      <div className="d-flex" style={{justifyContent:'space-between'}}>

      <div className=" d-flex align-items-center" onClick={onClick}>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{width:'10px',height:'10px'}}>
       <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
       </svg>
       <div className="m-0 ms-1" style={{fontWeight:'500',fontSize:'small'}}>All Screens</div>
        </div>

      <div className="d-flex justify-content-center align-items-center me-2 search">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{width:'15px',height:'15px'}}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </div>
       </div>
    </div>
    )}
    {open && (
         <div style={{margin:'0px 5px 10px 0px',
            padding:'0px 0px 10px 5px',width:'100%'}}>

        <div className="d-flex" style={{justifyContent:'space-between'}}>

        <div className=" d-flex flex-column align-items-center w-100"
             onClick={onClick}>
          <div className="m-0 ms-2 ps-2 Screen w-100 d-flex align-items-center" 
             style={{fontWeight:'500',fontSize:'small',height:'30px'}}>
            All Screens
          </div>

          <div className="m-0 ms-2 ps-2 Screen w-100 d-flex align-items-center" 
             style={{fontSize:'small',height:'30px',justifyContent:'space-between'}}>
            <div>
            <img src={rhombus} className="Icons ms-1 me-2"/>  
            Components  
            </div> 
            <div><img src={Slash} className="Icons ms-1 me-2"/> </div>
          </div>

          <div className="m-0 ms-2 ps-2 Screen w-100 d-flex align-items-center" 
             style={{fontSize:'small',height:'30px'}}>
            <img src={Bye} className="Icons ms-1 me-2"/>
            Thank You
          </div>
        </div>

        </div>
        </div>

    )}
        
        </>
    )
}

export default AllScreen;