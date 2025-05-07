import React, { useState } from "react";
import Search from '../assets/loupe.png';
import Walk from '../assets/walk.png'
import Triangle from '../assets/triangle.png'
import Color from '../assets/color-pallete.png';

function PageOption(){
    const [select,setSelect]=useState('');
    
    const SetStyle=(key)=>{
            return{fontSize:'small',
                   backgroundColor:select===key ? 'rgba(242, 241, 241, 0.8)' : 'white',
                   borderRadius:'5px',
                   width:'100%',
                   height:'30px'
                  };
        
    }
    return(
        <>
        <div className="d-flex flex-column justify-content-flex-start" >
         <div className="d-flex flex-row align-items-center ms-3 mb-1 mt-1 options" 
              onClick={()=>setSelect('search')}
              style={SetStyle('search')} >
            <img src={Search} className="Icons ms-1 me-2"/>
            <div >Reference and Exploration</div>
         </div>

         <div className="d-flex flex-row align-items-center ms-3 my-1 options" 
              onClick={()=>setSelect('walk')} 
              style={SetStyle('walk')}>
            <img src={Walk} className="Icons ms-1 me-2"/>
            <div>Design Process WalkThrough</div>
         </div>

         <div className="d-flex flex-row align-items-center ms-3 my-1 options" 
              onClick={()=>setSelect('triangle')}
              style={SetStyle('triangle')}>
            <img src={Triangle} className="Icons ms-1 me-2"/>
            <div>WieFrams</div>
         </div>

         <div className="d-flex flex-row align-items-center ms-3 my-1 options" 
              onClick={()=>setSelect('style')}
              style={SetStyle('style')}>
            <img src={Color} className="Icons ms-1 me-2"/>
            <div >Style Guide</div>
         </div>

         <div className="d-flex flex-row align-items-center ms-3 my-1 options" 
              onClick={()=>setSelect('board')}
              style={SetStyle('board')}>
            <div className="ps-1">Task 1: OnBoarding</div>
         </div>

         <div className="d-flex flex-row align-items-center ms-3 my-1 options" 
              onClick={()=>setSelect('main')}
              style={SetStyle('main')}>
           <div className="ps-1">Task 2: Main Dashoard</div>
         </div>
         </div>
        </>
    )
}
export default PageOption;