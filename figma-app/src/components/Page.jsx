import React, { useState } from "react";
import PageOption from "./PageOption";
import AllScreen from "./AllScreen";
import Layer from "./Layer";

function Page(){
   const [open,setOpen]=useState(false);
   const [click,setClick]=useState(true);

   const handleClick=()=>{
      setClick(false);
      setOpen(true);
   }
   const handleOpen=()=>{
      setClick(true);
      setOpen(false);
   }
 return(
    <>
    {click && (
    <AllScreen onClick={handleClick}/>
     )}
     
    {open && (
      <>
      <div style={{margin:'10px 5px 10px 0px',borderBottom:'1px solid rgb(151, 148, 148)',
         padding:'0px 0px 10px 5px',width:'100%'}}>

      <div className="d-flex" style={{justifyContent:'space-between'}}>

      <div className="d-flex align-items-center" onClick={handleOpen}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{width:'10px',height:'10px',marginRight:'3px'}}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>

      <div className="m-0" style={{fontWeight:'500',fontSize:'small'}}>Pages</div>
      </div>

      <div className="d-flex justify-content-center align-items-center me-2 search">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{width:'15px',height:'15px'}}>
         <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
         </svg>
      </div>
      </div>
      </div>
      <PageOption/>
      <AllScreen open={open}/>

      </>
      
    )}
    <Layer/>
    
    </>
 )
}
export default Page;