import React, { useState } from "react";
import LayerOptions from "./LayerOptions";

function Layer(){
    const [clicked,setClicked]=useState(true);
    const [open,setOpen]=useState(false);

    const handleClick=()=>{
        setClicked(true);
        setOpen(false);
    }
    const handleClickAgain=()=>{
        setClicked(false);
        setOpen(true);
    }
 return(
        <>
        <div style={{padding:'10px 0px 0px 5px'}}>
     {!clicked &&  (
       <div className=" d-flex align-items-center" >
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{width:'10px',height:'10px',marginRight:'3px'}}>
             <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
             </svg>
        
       <div className="m-0 ms-1" 
            style={{fontWeight:'500',fontSize:'small'}}
            onClick={handleClick}>Layer
        </div>
        </div>
     )}
        
        {clicked && (
              <div className=" d-flex align-items-center" >
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{width:'10px',height:'10px'}}>
               <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
               </svg>
             <div className="m-0 ms-1" 
             style={{fontWeight:'500',fontSize:'small'}}
             onClick={handleClickAgain}>Layers
             </div>
             </div>
        )}
        </div>
        {open && (
            <LayerOptions/>
        )}
        </>
    )
}

export default Layer;